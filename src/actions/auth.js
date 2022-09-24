import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./types";
  import AuthService from "../services/user/auth.service";
  
  export const register = (email, password , firstName , lastName, tenantName , company , phoneNumber) => (dispatch) => {
    return AuthService.register(email, password , firstName , lastName, tenantName , company , phoneNumber).then(
      (response) => {
        
        if (response.status === 201){
            dispatch({
              type: REGISTER_SUCCESS,
            });
            dispatch({
              type: SET_MESSAGE,
              payload: "Signup success ! "
            });
        }
        return Promise.resolve();
      },
      (error) => {
        console.log("error", error.response.status)

        if(error.response.status == 409 ){
          dispatch({
            type: REGISTER_FAIL,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: "This email alrady exists"
          });
        }
        else{
          dispatch({
            type: REGISTER_FAIL,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: "Singup failed!"
          });
        }

        
        return Promise.reject();
      }
    );
  };
  export const login =  (username, password) => (dispatch) => {
    return  AuthService.login(username, password).then(
      (data) => {
        
        if(data)
        {
            // let userdata = Object.assign(data, { username : data.firstname + data.lastname})
            let userdata = {...data,  username : data.firstName + " " +data.lastName }
            
            localStorage.setItem("user", JSON.stringify(userdata));
            dispatch({
              type: LOGIN_SUCCESS,
              payload: { user: userdata },
            });
            dispatch({
              type: SET_MESSAGE,
              payload: "Login successed",
            });
        }
        else{
          dispatch({
            type: SET_MESSAGE,
            payload: "Login failed",
          });
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
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: "Login failed",
        });
        return Promise.reject();
      }
    );
    
  };
  export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
      type: LOGOUT,
    });
  };