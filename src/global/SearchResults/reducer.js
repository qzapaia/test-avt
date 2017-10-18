import filterReducer from '../FlightsFilters/reducer'
import paginateReducer from '../Paginate/reducer'
import currencyReducer from '../CurrencySelector/reducer'
import { chunk, get, filter, map, set, clone, some, every} from 'lodash';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
 
const moment = extendMoment(Moment);
const FILTER_SCALES = 'scales';
const FILTER_AIRLINES = 'airlines';
const FILTER_SCHEDULES = 'schedule';
const FILTER_AIRPORTS = 'airports';

export default {
  paginate:paginateReducer,
  flightsFilters:filterReducer,
  currency:currencyReducer,
}

/**
 * aplica filtro por escala para el tramo especifico
 * @param {*} tramo 
 * @param {*} clusters 
 * @param {*} scales
 */
const filterClusterByScales = (tramo,clusters,scales) => {
  const filterSelectedTramo = get(scales,tramo,[])
  return filter(clusters, cluster => {
      return some(get(cluster.stages,tramo,[]), option => {   
          return some(option,opt => {
              return filterSelectedTramo.includes(opt.scales.toString())
          })
      })
  });
}

/**
 * 
 * @param {*} clusters 
 * @param {*} airlines 
 */

const filterClusterByAirline = (clusters,airlines) => {
  return filter(clusters, cluster => {
      return some(cluster.stages, stage => {
        return some(stage.options, option => {
          return some(option.marketingCarriers, mk => {
            return airlines.includes(mk) 
          });
        })
      });
  });   
}

/**
 * funcion que de acuerdo al schedule que se le pase retorna un range
 * @param {*} date 
 * @param {*} schedule 
 */
const getRangeBySchedule = (date,schedule) => {
  const ScheduleNight = "Por la noche - 20 a 06hs";
  const scheduleAfternoon = "Por la tarde -  12 a 20hs";
  const scheduleMorning = "Por la mañana - 06 a 12hs";

  const start = moment(date).minute(0)
  const end = moment(date).minute(0)

  if(schedule === scheduleMorning){
    start.hour(6)
    end.hour(12)
    return moment.range(start,end);
  }

  if(schedule === scheduleAfternoon){
    start.hour(12)
    end.hour(20)
    return moment.range(start,end);
  }

  if(schedule === ScheduleNight){
    start.hour(20)
    end.hour(6)
    return moment.range(start,end);
  }
  
}

/**
 * funsion que aplicar los filtros por schedule
 * @param {*} tramo 
 * @param {*} clusters 
 * @param {*} schedules 
 */
const filterClusterBySchedule = (tramo,clusters,schedules) => {
  return filter(clusters, cluster => {
    return some(get(cluster.stages,tramo,[]), stage => {
      return some(stage,option => {
        return every(get(schedules,tramo,[]),schedule => {
          const date = moment(option.departureDate)
          const range = getRangeBySchedule(option.departureDate,schedule);
          return range.contains(date);
        });
      });
    });
  });
}

/**
 * 
 * @param {*} tramo 
 * @param {*} subTramo 
 * @param {*} clusters 
 * @param {*} airports 
 */
const filterClusterByAirports = (tramo,subTramo,clusters,airports) =>{
  return filter(clusters,cluster => {
    return some(get(cluster.stages,tramo,[]), options => {
      return some(options,option => {
          const airpt = (subTramo == 0) ? option.departureAirport : option.arrivalAirport;
          return airports.includes(airpt)
      })
    })
  })
}


export const getClustersWithFilter = (state={}) => {
  const {newClusters,paginate,showItemsByPage,filters} = state;
  const clusters = get(newClusters,'clusters',[]);

  let clusterFiltered = clone(clusters);
  const fileters = Object.keys(filters.values);

  fileters.forEach(item => {
    const valuesTramos= Object.keys(filters.values[item]);
    const values = filters.values[item];

    if(values.length == 0) return;

    switch(item){
       case FILTER_SCALES:
          valuesTramos.forEach(tramo => {
            clusterFiltered = filterClusterByScales(tramo,clusters,values)
          })
       break; 

       case FILTER_AIRLINES:
          clusterFiltered = filterClusterByAirline(clusterFiltered,values);
       break;

       case FILTER_SCHEDULES:
          valuesTramos.forEach(tramo => {
            clusterFiltered = filterClusterBySchedule(tramo,clusterFiltered,values)
          })
       break;

       case FILTER_AIRPORTS:

          valuesTramos.forEach(tramo => {
            const subTramos = Object.keys(values[tramo]);
            subTramos.forEach(subTramo => {
              const airportbySubTramo = get(values,`${tramo}.${subTramo}`,[]);
              if(airportbySubTramo.length === 0) return;
              clusterFiltered = filterClusterByAirports(tramo,subTramo,clusterFiltered,airportbySubTramo)
            })
            
          })
       break;
    }
  })

  const values = chunk(clusterFiltered,showItemsByPage)

  if(values.length > 0){
    return values[paginate.selectedPage];
  }
  return [];
} 

