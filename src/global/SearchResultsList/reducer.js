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

  return {
    ...state,
    clusters
  };
}