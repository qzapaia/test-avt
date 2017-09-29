
export const FACEBOOK_SIGNUP_COMPLETE = 'FACEBOOK_SIGNUP_COMPLETE';

export const facebookSignup = async data => {
  const res = await fetch(`https://api.com/${id}`,{
    method:'POST',
    body:data
  })
  const state = await res.json();
  dispatch(facebookSignupResult(state))
}

export const facebookSignupResult = state => ({
  type:FACEBOOK_SIGNUP_COMPLETE,
  payload:state
})
