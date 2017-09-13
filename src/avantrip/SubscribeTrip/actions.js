export const SUBSCRIPTION_INIT = 'SUBSCRIPTION_INIT';
export const SUBSCRIPTION_COMPLETE = 'SUBSCRIPTION_COMPLETE';

export const async subscribeTrip = data => (
  const res = await fetch(`https://api.com/subscribeTrip/${id}`,{
    method:'POST',
    body:data
  })
  const state = await res.json();
  dispatch(subscriptionResult(state))
)

export const subscriptionResult = state => ({
  type:SUBSCRIPTION_COMPLETE,
  payload:state
})
