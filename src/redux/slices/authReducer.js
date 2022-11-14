import { createSlice } from '@reduxjs/toolkit'
import AuthService from "../../services/user/auth.service";
import { setMessage } from './messageReducer';
import {sessionIdKey} from "../../constants/localstorage"
import {v4 as uuidv4} from 'uuid'

const user = JSON.parse(localStorage.getItem("user"));
if(localStorage.getItem(sessionIdKey) === null)
  localStorage.setItem(sessionIdKey, uuidv4())

const sessionId = localStorage.getItem(sessionIdKey)
export const initialState = user? 
                { isLoggedIn: true, user, tenant: "", accessToken: "", sessionId: sessionId} : 
                { isLoggedIn: false, user: null, tenant: "", accessToken: "", sessionId: sessionId};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.isLoggedIn = false
    },
    registerFail: (state, action) => {
      state.isLoggedIn = false
    },
    loginSuccess: (state, action) =>{
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    loginFail: (state, action) => {
      state.isLoggedIn = false
      state.user = null
    },
    tenantSuccess: (state, action) => {
      state.tenant = action.payload
    },
    accessTokenSuccess: (state, action) => {
      state.accessToken = action.payload
    },
    logoutSuccess: (state, action) => {
      state.isLoggedIn = false
      state.user = null
    }
  }
});
// The reducer
export default authSlice.reducer
// The Actions
export const {
  registerSuccess,
  registerFail,
  loginSuccess,
  loginFail,
  logoutSuccess,
  tenantSuccess,
  accessTokenSuccess
} = authSlice.actions

export const register = (email, password , firstName , lastName, tenantName , company , phoneNumber) => (dispatch) => {
  return AuthService.register(email, password , firstName , lastName, tenantName , company , phoneNumber).then(
    (response) => {
      
      if (response.status === 201){
          dispatch(registerSuccess());
          dispatch(setMessage("Signup success ! "));
      }
      return Promise.resolve();
    },
    (error) => {
      if(error.response.status == 409 ){
        dispatch(registerFail());
        dispatch(setMessage("This email alrady exists"));
      }
      else{
        dispatch(registerFail());
        dispatch(setMessage("Singup failed!"));
      }

      
      return Promise.reject();
    }
  );
};

export const login =  (username, password, userTenant) => (dispatch) => {
  return  AuthService.login(username, password, userTenant).then(
    (data) => {
      
      if(data)
      {
          let userdata = {...data,  userTenant: userTenant, username : data.firstName + " " +data.lastName }
          
          localStorage.setItem("user", JSON.stringify(userdata));
          dispatch(loginSuccess({ user: userdata }));
          dispatch(setMessage("Login successed"));
      }
      else{
        dispatch(setMessage("Login failed"));
      }
      
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch(loginFail());
      dispatch(setMessage("Login failed"));
      return Promise.reject();
    }
  );
  
};

export const setTenant = (tenant) => (dispatch) => {
    dispatch(tenantSuccess(tenant))
}

export const setAccessToken = (token) => (dispatch) => {
  dispatch(accessTokenSuccess(token))
}

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch(logoutSuccess());
};
// Selector
export const tenantSelector = (state) => state.auth.tenant
export const accessTokenSelector = (state) => state.auth.accessToken
export const sessionIdSelector = (state) => state.auth.sessionId
export const isLoggedInSelector = (state) => state.auth.isLoggedIn