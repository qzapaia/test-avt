import { SET_REPOS } from './actions';
import { get, find, map } from 'lodash';

const initialState = {
  repos:[]
};

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
    case 2:
      return '2 escalas';
    break;
    default:
      return 'Directo'
  }
} 

const getFlight = ( f, index ) => {
  let flight = {};

  flight.common = {
    'flightStep': index+1,
    'flightNumber': f.code,
    'airlineLogo': getAirlineLogos([f.marketingCarrier]),
    'provider': f.marketingCarrier,
    'class': 'Económica',
  }

  flight.departure = {
    'iata': f.segments[0].departure.location,
    'date': f.segments[0].departure.date,
    'city': `Ciudad de ${f.segments[0].departure.location}`,
    'airport': `Aeropuerto de ${f.segments[0].departure.location}`
  }

  flight.arrival = {
    'iata': f.segments[0].arrival.location,
    'date': f.segments[0].arrival.date,
    'city': `Ciudad de ${f.segments[0].arrival.location}`,
    'airport': `Aeropuerto de ${f.segments[0].arrival.location}`
  }

  return flight;
}

//¿Esto debería ser un componente aparte?
const getAirlineLogos = airlineIatas => (
  map(airlineIatas, a => `https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/${a}.png?adq-20170927-0`)
)

const getRouteOption = ro => {
  let routeOption = {};

  // Me falta el id de la ruta
  // Me faltan los logos de la aerolinea
  // Me falta mapear el provider
  // Duration que significa

  routeOption.summaryInfo = {
    'id': ro.index, 
    'airlineLogos': getAirlineLogos(ro.marketingCarriers), //validar
    'provider':`Operado por ${ro.validatingCarrier}`, //validar
    'departureIata': ro.departureAirport,
    'departureDate': ro.departureDate,
    'arrivalIata': ro.arrivalAirport,
    'arrivalDate': ro.arrivalDate,
    'scalesText': getScaleLabel(ro.scales),
    'totalTime': ro.duration,
    'isSelected':false
  }  

  routeOption.extendedInfo = {
    'header': 'Buenos Aires hacia Córdoba',
    'flights': map(ro.flights, ( r, index )  => getFlight(r, index))
  }

  return routeOption;
}

const getRoute = r => {
  let route = {};

  //Ojo con el label de los tramos. TODO cuando haya multidestinos
  route.header = {
    title:'Ida',
    departureCity: 'Nueva York',
    arrivalCity: 'Buenos Aires',
    date:new Date()
  } 

  route.options = map(r.options, ro => getRouteOption(ro));

  return route;
}

const getFlightCluster = c => {
  let fc = {};

  fc.additionalInfo = c.additionalInfo;
  fc.disclaimerText = c.disclaimerText;
  fc.routes = {};

  if(c.stages.length>0){

    if(c.stages[0]){
      fc.routes.first = getRoute(c.stages[0]);      
    }

    if(c.stages[1]){
      fc.routes.second = getRoute(c.stages[1]);      
    }

    if(c.stages[2]){
      fc.routes.third = getRoute(c.stages[2]);      
    }

  }

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
    'finalPrice': 69.177
  }

  return fc;
}

export const populateStages = (state={}) => {

  const masterStages = state.stages;
  
  const clusters = state.clusters.map(c=>({
    ...c,
    stages:map(c.stages,stage=>({
      options:stage.options.map(o=>masterStages[o])
    })),

    additionalInfo : "¡Hasta 12 cuotas sin interés con Visa y Master del Banco Francés!",
    disclaimerText : "¿Qué incluye el precio?",
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