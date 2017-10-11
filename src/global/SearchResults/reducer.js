import filterReducer from "../FlightsFilters/reducer";
import paginateReducer from "../Paginate/reducer"
import { chunk ,get} from 'lodash';

export default {
  paginate:paginateReducer,
  flightsFilters:filterReducer,
}

export const getClustersWithFilter = (state={}) => {
  const {newClusters,paginate,showItemsByPage,filters} = state;
  const cluster = get(newClusters,'flightClusters',[]);
  const values = chunk(cluster,showItemsByPage)

  if(values.length > 0){
    return values[paginate.selectedPage];
  }
  return [];

} 