export const FEATURED_PRODUCTS_SET_PRODUCTS = "FEATURED_PRODUCTS_SET_PRODUCTS";

import { json as fetchJSONOnce } from 'fetch-once-q';
import { map } from "lodash";

export const getProducts = type => async dispatch => {
  const res = await fetchJSONOnce(
    "http://localhost:9001/mocks/home_prod_env.json"
  );
  dispatch(setProducts(res, type));
};

export const setProducts = (data, type) => {
  let products = [];
  switch (type) {
    case "bestSellers":
      products = map(data.bestsellers_flights, bestSellers => {
        return {
          price: bestSellers.price_from.replace(".", ""),
          media: bestSellers.image,
          title: bestSellers.destination_name,
          subtitle: bestSellers.flight_type,
          href: bestSellers.url
        };
      });
      break;
    case "promotionalFlights":
      products = map(data.promotional_banners, flight => {
        return {
          price: flight.price.replace(".", ""),
          media: flight.image,
          imageTitle: flight.publication_type,
          title: flight.destination_name,
          subtitle: flight.sub_title_bottom,
          supportingInfo: flight.previous_price,
          href: flight.url
        };
      });
      break;
  }

  return {
    type: FEATURED_PRODUCTS_SET_PRODUCTS,
    payload: products
  };
};
