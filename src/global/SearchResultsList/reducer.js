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
    'flights': flatMap(ro.flights, ( r, index )  => {
      return getFlightSegments( r, index )
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

const getFormatPrices = (prices,currencyValue) => {
  console.log(prices,currencyValue,Math.round((prices/currencyValue)));
  return Math.round((prices/currencyValue))
}

const getCurrencyValue = (currency) =>{
  if(currency.value == 'REAL')
    return 3.2;
  if(currency.value == 'USD')
    return 17.8
  
  return 1
}

const getFlightCluster = (cluster,currency) => {
  let fc = {};

  fc.additionalInfo = cluster.additionalInfo;
  fc.disclaimerText = cluster.disclaimerText;

  fc.routes = map(cluster.stages, (stage, index) => (
    getRoute(stage, getStageLabel(cluster.flightType, index))
  ));

  fc.fareDetail = {
    'referencePrice': getFormatPrices(Number.parseInt(cluster.price.totalPrice),getCurrencyValue(currency)),
    'items': [{
      'label': '2 Adultos',
      'price': getFormatPrices(25604,getCurrencyValue(currency))
    },{
      'label': '2 Niños',
      'price': getFormatPrices(24048,getCurrencyValue(currency))
    },{
      'label': '2 Bebés',
      'price': getFormatPrices(622,getCurrencyValue(currency))
    }],
    'taxes': getFormatPrices(14633,getCurrencyValue(currency)),
    'charges': getFormatPrices(0,getCurrencyValue(currency)),
    'finalPrice': getFormatPrices(69177,getCurrencyValue(currency))
  }

  return fc;
}

export const populateStages = (state={}) => {

  const masterStages = state.stages;

  references.set(state.references);

  const clusters = state.clusters.map(c=> ({
    ...c,
    stages:map(c.stages,stage=>({
      options:stage.options.map(o=>masterStages[o])
    })),

    additionalInfo : "¡Hasta 12 cuotas sin interés con Visa y Master del Banco Francés!",
    disclaimerText : "¿Qué incluye el precio?",
    flightType: state.flightType
  }))

  return {
    ...state,
    clusters,
  };
}

export const populateCluster = (state={}) => {
  const { clusters, currency } = state
  const flightClusters = map(clusters, c => {
    return getFlightCluster(c,currency)
  })

  return {
    ...state,
    flightClusters:flightClusters
  };
}
