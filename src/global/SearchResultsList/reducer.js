import { SET_REPOS } from './actions';
import { get, find, map, flatMap, minBy, min } from 'lodash';

const initialState = {
  repos:[]
};

const references = (function(){
  let _data = [];
  function set(ref){
    _data = ref;
  }
  function get(id){
    return _data;
  }
  return {
    set: set,
    get: get
  };
}());

const getCityName = airportIata => {
  return references.get().cities[references.get().hierarchies[airportIata].city]
}

const getStageLabel = ( flightType, index ) => {
  if(flightType == 'oneway' || flightType == 'roundtrip'){
    return index == 0 ? 'Ida' : 'Vuelta';
  } else {
    return 'Vuelo ' + (index + 1)
  }
}

export default (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch(type){
    case SET_REPOS:
      return {
        ...state,
        repos:payload
      }
      break;

    default:
      return state;
  }
}

const getScaleLabel = scale => {
  switch(scale){
    case 0:
      return 'Directo';
    break;
    case 1:
      return '1 escala';
    break;
    default:
      return scale + ' escalas'
  }
}

const getFlightSegments = f => {
  let flightSegments = [];

  map(f.segments, fs => {
    let flight = {};

    flight.common = {
      'flightNumber': f.code,
      'airlines': getAirlines([f.marketingCarrier]),
      'class': 'Económica',
    }

    if(f.operatingCarrier != f.marketingCarrier ){
      flight.common['provider'] = getAirlines([f.operatingCarrier]);
    }

    flight.departure = {
      'iata': fs.departure.location,
      'date': fs.departure.date,
      'city': `${getCityName(fs.departure.location)}`,
      'airport': `${references.get().airports[fs.departure.location]}`
    }

    flight.arrival = {
      'iata': fs.arrival.location,
      'date': fs.arrival.date,
      'city': `${getCityName(fs.arrival.location)}`,
      'airport': `${references.get().airports[fs.arrival.location]}`
    }

    flightSegments.push(flight);
  })

  return flightSegments;
}

const getAirlines = airlinesCodes => (
  map(airlinesCodes, code =>({
      "code": code,
      "name": references.get().carriers[code]
  }))
);

const getRouteOption = ro => {
  let routeOption = {};

  // Me falta el id de la ruta
  // Me faltan los logos de la aerolinea
  // Me falta mapear el provider
  // Duration que significa

  routeOption.summaryInfo = {
    'id': ro.index,
    'airlines': getAirlines(ro.marketingCarriers),
    'departureIata': ro.departureAirport,
    'departureDate': ro.departureDate,
    'arrivalIata': ro.arrivalAirport,
    'arrivalDate': ro.arrivalDate,
    'scalesText': getScaleLabel(ro.scales),
    'totalTime': ro.duration,
    'isSelected':false
  }

  if(ro.codeshare){
    const provider = find(ro.flights, (flight) =>{
      return flight.operatingCarrier != flight.marketingCarrier;
    });
    routeOption.summaryInfo["provider"] =  getAirlines([provider.operatingCarrier]);
  }

  routeOption.extendedInfo = {
    'flights': flatMap(ro.flights, r => getFlightSegments(r))
  }

  routeOption.extendedInfo = {
    'flights': map(routeOption.extendedInfo.flights, ( f, index ) => {
      f.common.flightStep = index + 1;

      if(routeOption.extendedInfo.flights[index+1]){
        if(routeOption.extendedInfo.flights[index].arrival.iata != routeOption.extendedInfo.flights[index+1].departure.iata){
          f.common.changeAirport = true;
          routeOption.extendedInfo.flights[index].arrival.changeAirport = true;
          routeOption.extendedInfo.flights[index+1].departure.changeAirport = true;
        }

        //Lo paso a minutos para estandarizar con totalTime
        f.common.waitingTime = (routeOption.extendedInfo.flights[index+1].departure.date - routeOption.extendedInfo.flights[index].arrival.date)/1000/60;
      }

      return f;
    })
  }

  routeOption.extendedInfo.header =
    `${routeOption.extendedInfo.flights[0].departure.city} hacia
    ${routeOption.extendedInfo.flights[routeOption.extendedInfo.flights.length-1].arrival.city}`

  return routeOption;
}

const getRoute = ( r, stageLabel ) => {
  let route = {};

  route.options = map(r.options, ro => getRouteOption(ro));

  route.header = {
    title:stageLabel,
    departureCity: getCityName(route.options[0].summaryInfo.departureIata),
    arrivalCity: getCityName(route.options[0].summaryInfo.arrivalIata),
    date:route.options[0].summaryInfo.departureDate
  }

  return route;
}

const getLastFlightPlacesCount = paxFare => min(map(paxFare.stageFares, f => minBy(f.flightFares, 'avlStatus').avlStatus));

const getFlightCluster = c => {
  let fc = {};

  fc.additionalInfo = c.additionalInfo;
  fc.disclaimerText = c.disclaimerText;
  fc.id = c.id;
  fc.routes = map(c.stages, (stage, index) => (
    getRoute(stage, getStageLabel(c.flightType, index))
  ));

  fc.fareDetail = {
    'referencePrice': c.price.totalPrice,
    'items': [{
      'label': '2 Adultos',
      'price': 25604
    },{
      'label': '2 Niños',
      'price': 24048
    },{
      'label': '2 Bebés',
      'price': 622
    }],
    'taxes': 14633,
    'charges': 0,
    'finalPrice': 69.177,
    'lastPlacesCount': getLastFlightPlacesCount(c.paxFare[0])
  }

  return fc;
}

export const populateStages = (state={}) => {

  const masterStages = state.stages;

  references.set(state.references);

  const clusters = state.clusters.map((c, id) => ({
    id,
    ...c,
    stages:map(c.stages,stage=>({
      options:stage.options.map(o=>masterStages[o])
    })),

    additionalInfo : "¡Hasta 12 cuotas sin interés con Visa y Master del Banco Francés!",
    disclaimerText : "¿Qué incluye el precio?",
    flightType: state.flightType
  }))

  const flightClusters = map(clusters, c => {
    return getFlightCluster(c)
  })

  return {
    ...state,
    clusters,
    flightClusters
  };
}

export const populateCluster = (state={}) => {

  const flightClusters = map(state.clusters, c => {
    return getFlightCluster(c)
  })

  return {
    ...state,
    flightClusters:flightClusters
  };
}
