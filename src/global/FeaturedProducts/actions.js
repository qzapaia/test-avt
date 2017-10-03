export const FEATURED_PRODUCTS_GET_BESTSELLERS = 'FEATURED_PRODUCTS_GET_BESTSELLERS';
export const FEATURED_PRODUCTS_GET_PROMOTIONALFLIGHTS = 'FEATURED_PRODUCTS_GET_PROMOTIONALFLIGHTS';
export const FEATURED_PRODUCTS_SET_BESTSELLERS = 'FEATURED_PRODUCTS_SET_BESTSELLERS';
export const FEATURED_PRODUCTS_SET_PROMOTIONALFLIGHTS = 'FEATURED_PRODUCTS_SET_PROMOTIONALFLIGHTS';

import {json as fetchJSONOnce} from '../../utils/fetch-once';

export const getBestSellers = id => async dispatch => {
  const res = await fetchJSONOnce('http://localhost:9001/mocks/home_prod_env.json');
  dispatch(setBestSellers(res));
}

export const getPromotionalFlights = id => async dispatch => {
  const res = await fetchJSONOnce('http://localhost:9001/mocks/home_prod_env.json');
  dispatch(setPromotionalFlights(res));
}

export const setBestSellers = data => ({
  type:FEATURED_PRODUCTS_SET_BESTSELLERS,
  payload:data.bestsellers_flights
})

export const setPromotionalFlights = data => ({
  type:FEATURED_PRODUCTS_SET_PROMOTIONALFLIGHTS,
  payload:data.promotional_banners
})
