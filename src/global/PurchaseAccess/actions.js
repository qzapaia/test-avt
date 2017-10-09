import { set as setCookie} from "js-cookie";

export const SET_PURCHASE = "SET_PURCHASE";
export const SET_STATUS = "SET_STATUS";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const onSubmit = formValue => dispatch => {
  dispatch(setStatus("loading"));
  dispatch(setErrorMessage());
  if (formValue.purchaseEmail && formValue.purchaseId) {
    fetch(
      "http://avantrip.apps.int.devtrip.com.ar/compras-vuelos-war/compras/session",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userMail: formValue.purchaseEmail,
          reservationCode: formValue.purchaseId
        })
      }
    )
      .catch(err => {
        dispatch(setErrorMessage("Ah ocurrido un error. Inténtelo más tarde."));
        dispatch(setStatus());
      })
      .then(res => res && res.json())
      .then(res => {
        if (res && res.authorizationToken) {
          setCookie("miCompraAuthorizationToken", res.authorizationToken, {
            expires: 1 / 144,
            path: "/"
          });
          location.href = `/micompra/${res.reservationCode}`;
        } else {
          dispatch(
            setErrorMessage(
              "No se ha encontrado una compra asociada. Por favor ingresá tus datos de nuevo."
            )
          );
          dispatch(setStatus());
        }
      });
  } else {
    dispatch(
      setErrorMessage(
        "Por favor, revisá los campos incorrectos y volvé a intentarlo."
      )
    );
    dispatch(setStatus());
  }
};

export const setPurchase = value => ({
  type: SET_PURCHASE,
  payload: value
});

export const setErrorMessage = message => ({
  type: SET_ERROR_MESSAGE,
  errorMessage: message
});

export const setStatus = status => ({
  type: SET_STATUS,
  status: status
});
