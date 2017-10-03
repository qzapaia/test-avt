export const SUBSCRIPTION_INIT = 'SUBSCRIPTION_INIT';
export const SUBSCRIPTION_COMPLETE = 'SUBSCRIPTION_COMPLETE';
export const SET_EMAIL = 'SET_EMAIL';

/*
export const subscribe = async data => {
  const res = await fetch(`https://api.com/${id}`,{
    method:'POST',
    body:data
  })
  const state = await res.json();
  dispatch(subscriptionResult(false))
}
*/

// Alto Hardcoding Papas
export const subscribe = data => {
  return subscriptionResult({state: true});
}

export const subscriptionResult = state => ({
  type:SUBSCRIPTION_COMPLETE,
  payload:state
})

export const setEmail = email => ({
  type:SET_EMAIL,
  email
})
