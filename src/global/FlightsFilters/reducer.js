import { map , set ,get, clone, remove} from 'lodash';
import { SET_CHANGE,SET_CLEAR } from './actions';

/**
 * Se define values como un object 
 * para porder utilizar los metodos de loadash para el tratamientos de objetos
 * y poder buscar los filtros navegando atravez del objetos ej: scales.0 or scales.1
 * y poder tratarlos como key unicas. 
 */
const initialState = {
  values:{}
};

export default (state = initialState, action) => {
  const { type, payload} = action;

  switch(type){
    case SET_CHANGE:
      const {path,change: { checked, value } } = payload;
      const newValues = clone(state.values);
      const pathValues = get(newValues,path,[]);

      if(checked){
        pathValues.push(value)
        set(newValues,path,pathValues);
      }else{
        remove(pathValues, v => v== value)
      }
      return {
        ...state,
        values: newValues
      }
    break;
    
    case SET_CLEAR:
      const newVals = clone(state.values);
      let { id } = payload;

      set(newVals,id,[]);

      return{
        ...state,
        values: newVals
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

export const populateFilters = (state={}) => {
  const filtros = get(state,'filters',{})
  const references = state.references;
  const airlines = get(state.filters,'carriers',{});
  const scales = get(state.filters,'scales',{});
  const schedules = get(state.filters,'schedules',{});
  const airports = get(state.filters,'airports',{});
  const flightType = get(state,'flightType',{})

  const newAirliens = map(Object.keys(airlines),code => ({
    value: code,
    label: references.carriers[code]
  }));

  const newScales = map(Object.keys(scales),(code,k) => {
    const objectValue = scales[code];
    const opts = Object.keys(objectValue).map((c,j) => ({
          label: `${getScaleLabel(Number.parseInt(c))}(${objectValue[c]})` ,
          value:c,
    }));  
    return { options: opts }
  });
  
  const newSchedules = map(Object.keys(schedules),(code,k) => {
    const objectValue = schedules[code];
    const opts = Object.keys(objectValue).map((c,j) => ({
          label: `${c}(${objectValue[c]})` ,
          value:c,
    }));  
    return { options: opts }
  });

  const newAirports = map(Object.keys(airports),(code,k) => {
    const objectValue = airports[code];
     return Object.keys(objectValue).map((airport,j) => {
      const keyDeparture = objectValue[airport];
      const opts =  Object.keys(keyDeparture).map((v,i) => ({
          label: `${get(references,`airports.${v}`)} - ${v} (${keyDeparture[v]})` ,
          value:v,   
      }));
      return {
        options: opts
      }
    }).reverse();  
  });

  const filters = {
    airlines : newAirliens,
    scales : newScales,
    schedules : newSchedules,
    airports: {
      items:newAirports,
      cities: map(references.cities,code => code)
    },
    flightType,
  }

  return {
    ...state,
    filters,
  };
}
