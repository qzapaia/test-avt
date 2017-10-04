export const SET_PURCHASE = 'SET_PURCHASE';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const onSubmit = formValue => dispatch => {
  if(formValue.purchaseEmail &&  formValue.purchaseId){
    fetch("http://vuelos.apps.stage.devtrip.com.ar/compras-vuelos-war/compras/session", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userMail:formValue.purchaseEmail,
        reservationCode: formValue.purchaseId
      })
    })
    .then((res) => {
      if(res.status == 200){
        console.log(`http://vuelos.apps.stage.devtrip.com.ar/micompra/${formValue.purchaseId}`)
        //location.href=`http://vuelos.apps.stage.devtrip.com.ar/micompra/${formValue.purchaseId}`;
      }else{
        dispatch(setErrorMessage("No se ha encontrado una compra asociada. Por favor ingresá tus datos de nuevo."));
      }
    });
  }else{
    dispatch(setErrorMessage("Por favor, revisá los campos incorrectos y volvé a intentarlo."));
  }
}

export const setPurchase = value => ({
  type:SET_PURCHASE,
  payload:value
})

export const setErrorMessage = (message) => ({
  type:SET_ERROR_MESSAGE,
  errorMessage: message
})
