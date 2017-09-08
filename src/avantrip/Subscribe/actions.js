export const SUBSCRIPTION_INIT = 'SUBSCRIPTION_INIT';
export const SUBSCRIPTION_COMPLETE = 'SUBSCRIPTION_COMPLETE';

export const subscribe = data => (
  fetch(`https://api.com/${id}`,{
    method:'POST',
    body:data
  })
  .then(res=>res.json())
  .then(state=>dispatch(subscriptionResult(state)))
)

export const subscriptionResult = state => ({
  type:SUBSCRIPTION_COMPLETE,
  payload:state
})
