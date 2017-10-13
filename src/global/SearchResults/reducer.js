import filterReducer from "../FlightsFilters/reducer";
import paginateReducer from "../Paginate/reducer"
import { chunk, get, filter, map, set, clone} from 'lodash';

export default {
  paginate:paginateReducer,
  flightsFilters:filterReducer,
}

/**
 * aplica filtro por escala para el tramo especifico
 * @param {*} tramo 
 * @param {*} clusters 
 * @param {*} scales
 */
const filterClusterByScales = (tramo,clusters,scales) => {
  return filter(clusters, c => {
      let showCluster = true;

      const filterSelectedTramo = get(scales,tramo,[])
      const valuesTramo = get(c,`stages.${tramo}.options`,[])
      const options = filter(valuesTramo,value => {
        return filterSelectedTramo.find(f => Number.parseInt(f) === value.scales)
      })   

      set(c,`stages.${tramo}.options`,options)

      showCluster = (options.length > 0);
     
    return showCluster;
  });
}

const FILTER_SCALES = 'scales';


export const getClustersWithFilter = (state={}) => {
  const {newClusters,paginate,showItemsByPage,filters} = state;
  const cluster = get(newClusters,'clusters',[]);
  let clusterFiltered = clone(cluster);
  const fileters = Object.keys(filters.values);

  fileters.forEach(item => {
    switch(item){
       case FILTER_SCALES:
          const scaleSelectedInTramo = filters.values[item];
          const valuesTramos= Object.keys(filters.values[item]);
          valuesTramos.forEach(tramo => {
            clusterFiltered = filterClusterByScales(tramo,cluster,scaleSelectedInTramo)
          })
          
       break 
    }
  })

  const values = chunk(clusterFiltered,showItemsByPage)

  if(values.length > 0){
    return values[paginate.selectedPage];
  }
  return [];
} 

