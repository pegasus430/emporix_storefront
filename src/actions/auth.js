import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./types";
  import AuthService from "../services/user/auth.service";
  
  export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
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
          type: REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
  export const login =  (username, password) => (dispatch) => {
    return  AuthService.login(username, password).then(
      (data) => {
        console.log("data from login service", data)
        if(data)
        {
            // let userdata = Object.assign(data, { username : data.firstname + data.lastname})
            let userdata = {...data,  username : data.firstName + " " +data.lastName }
            console.log("userdata", userdata)
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
    
      
    // const data = {
    //   username : "Jack White" ,
    //   accessToken : "dfsesdfsdfa98sa7df"
    // }

    // localStorage.setItem("user", JSON.stringify(data));

    // dispatch({
    //   type: LOGIN_SUCCESS,
    //   payload: { user: data },
    // });
    // return Promise.resolve();
      
      
    
  };
  export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
      type: LOGOUT,
    });
  };