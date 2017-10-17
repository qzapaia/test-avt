import {
  ERROR_STATE,
  SUCCESS_STATE,
  INITIAL_STATE,
  HOME_TYPE,
  SEARCH_TYPE
} from "./constants";

export const SUBSCRIPTION_INIT = "SUBSCRIPTION_INIT";
export const SUBSCRIPTION_COMPLETE = "SUBSCRIPTION_COMPLETE";
export const SUBSCRIPTION_SET_EMAIL = "SUBSCRIPTION_SET_EMAIL";
export const SUBSCRIPTION_SET_CITY = "SUBSCRIPTION_SET_CITY";

export const subscribe = (type, data) => async dispatch => {
  let customBody = {
    email: data.email,
    customFields: {
      http_referer: location.href
    },
    campaign: "newsletter",
    businessUnit: "Vuelos"
  };

  switch (type) {
    case HOME_TYPE:
      customBody.customFields["ref"] = "Home";
      break;
    case SEARCH_TYPE:
      customBody.customFields["ref"] = "Vuelos Búsqueda";
      customBody.customFields["alerta"] = "si";
      customBody.customFields["destino_alerta"] = data.city;
      break;
  }

  const token = await getToken();
  const res = await fetch(
    `https://api.avantrip.com/mkt-auto-api/v1/subscribe`,
    {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }),
      body: JSON.stringify([customBody])
    }
  );
  const subscriptionStatus = await res.json();
  dispatch(subscriptionResult(getSubscriptionStatus(subscriptionStatus)));
};

export const subscriptionResult = status => ({
  type: SUBSCRIPTION_COMPLETE,
  payload: {
    status: status
  }
});

export const setEmail = email => ({
  type: SUBSCRIPTION_SET_EMAIL,
  payload: {
    email: email
  }
});

export const setCity = city => ({
  type: SUBSCRIPTION_SET_CITY,
  payload: {
    city: city
  }
});

const getToken = async () => {
  const resAuthenticate = await fetch(
    `https://api.avantrip.com/mkt-auto-api/v1/authenticate`,
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }),
      body: "client=vuelos"
    }
  );
  const resJSON = await resAuthenticate.json();
  return resJSON.token || null;
};

const getSubscriptionStatus = state => {
  if (state.message == "Subscripcion exitosa") {
    return SUCCESS_STATE;
  } else {
    return ERROR_STATE;
  }
};
