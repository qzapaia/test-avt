import { SET_REPOS } from './actions';
import { get, find, map, flatMap } from 'lodash';

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

const getFlightSegments = ( f, index ) => {
  let flightSegments = [];

  map(f.segments, (fs, segmentsIndex)  => {
    let flight = {};

    flight.common = {
      'flightStep': index+segmentsIndex+1,
      'flightNumber': f.code,
      'airlineLogo': getAirlineLogos([f.marketingCarrier]),
      'provider': references.get().carriers[f.marketingCarrier],
      'class': 'Económica',
    }

    flight.departure = {
      'iata': fs.departure.location,
      'date': fs.departure.date,
      'city': `Ciudad de ${references.get().cities[fs.departure.location]}`,
      'airport': `Aeropuerto de ${references.get().airports[fs.departure.location]}`
    }

    flight.arrival = {
      'iata': fs.arrival.location,
      'date': fs.arrival.date,
      'city': `Ciudad de ${references.get().cities[fs.arrival.location]}`,
      'airport': `Aeropuerto de ${references.get().airports[fs.arrival.location]}`
    }

    flightSegments.push(flight);    
  })

  return flightSegments;
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
    'provider':`Operado por ${references.get().carriers[ro.validatingCarrier]}`, //validar
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
    'flights': flatMap(ro.flights, ( r, index )  => {
      return getFlightSegments( r, index ) 
    })
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
      c.stages[1].references = references;
      fc.routes.second = getRoute(c.stages[1]);      
    }

    if(c.stages[2]){
      c.stages[2].references = references;
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

const setPaginteToList = (clusters,state) => {
  //console.log(state);
}

export const populateStages = (state={}) => {

  const masterStages = state.stages;

  references.set(state.references);
  
  const clusters = state.clusters.map(c=>({
    ...c,
    stages:map(c.stages,stage=>({
      options:stage.options.map(o=>masterStages[o])
    })),

    additionalInfo : "¡Hasta 12 cuotas sin interés con Visa y Master del Banco Francés!",
    disclaimerText : "¿Qué incluye el precio?"
  }))

  const flightClusters = map(clusters, c => {
    return getFlightCluster(c)
  })

  setPaginteToList(flightClusters,state)

  return {
    ...state,
    clusters,
    flightClusters
  };
}