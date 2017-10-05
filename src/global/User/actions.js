
export const FACEBOOK_SIGNUP_SET_USER = 'FACEBOOK_SIGNUP_SET_USER';
export const USER_LOG_OUT = 'USER_LOG_OUT';

export const setFacebookUser = state => ({
  type:FACEBOOK_SIGNUP_SET_USER,
  payload:state
})


export const logout = () => ({
  type:USER_LOG_OUT,
  payload:{}
})
