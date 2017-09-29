export const TRIP_SUBSCRIPTION_INIT = 'TRIP_SUBSCRIPTION_INIT';
export const TRIP_SUBSCRIPTION_COMPLETE = 'TRIP_SUBSCRIPTION_COMPLETE';

export const async tripSubscribe = data => (
  const res = await fetch(`https://api.com/tripSubscribe/${id}`,{
    method:'POST',
    body:data
  })
  const state = await res.json();
  dispatch(subscriptionResult(state))
)

export const subscriptionResult = state => ({
  type:TRIP_SUBSCRIPTION_COMPLETE,
  payload:state
})
