import React, { useState, useRef , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate , Link } from 'react-router-dom';
import landing_bg from '../assets/landing_bg.png'
import login_atom from '../assets/login_atom.png'
import { login } from "../actions/auth";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import {  SET_MESSAGE } from "../actions/types";

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [loading, setLoading] = useState(false)
  const [userEmail, setUserEmail] = useState("");
  const [openNotification , setOpenNotification] = useState(false)
  const [password, setPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState("")

  const { isLoggedIn } = useSelector(state => state.auth);
  
  const dispatch = useDispatch();
  const { message } = useSelector(state => state.message);

//   useEffect(() => {
//     if (message)
//         setOpenNotification(true)
//   }, [message]);


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenNotification(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const onChangeUserEmail = (e) => {
    if (!isValidEmail(e.target.value)){
        setEmailMessage("Email is invalid")
    }
    else{
        setEmailMessage(null)
        
    }
    setUserEmail(e.target.value);
    
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
   
    if (userEmail && password){
        setLoading(true)
        dispatch(login(userEmail, password))
        .then(() => {
            props.history.push("/");
            window.location.reload();
            setOpenNotification(true)
            setLoading(false)
        })
        .catch(() => {
            setOpenNotification(true)
            setLoading(false)
        });
    }
    
  };


  if (isLoggedIn) {
    return <Navigate  to="/" />;
  }

  return (
        <div className="login_container" style={{backgroundImage : `url(${landing_bg})`  }} >
            <Snackbar
                open={openNotification}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin = {{vertical:"top", horizontal: "right"}}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            <div className="w-[540px] mx-auto h-[740px] pt-[138px]">
                <div className="w-full h-[110px] items-center  text-center text-white font-bold font-inter text-7xl flex">
                    <div className="mx-auto flex">
                        <Link to={'/'} className="flex">
                            <img src={login_atom} className="w-[78px] h-[86px] mr-5"  />
                            atom
                        </Link>
                    </div>
                    
                </div>
                <div className="w-full bg-white p-12  shadow-2xl">
                    <div className="pt-12 text-center">
                        <div className="font-inter font-bold text-3xl text-[#377395]">Log in to your account</div>
                        <div className="text-xl font-inter font-medium text-[#818385] pt-6">Welcome back! Please enter your details</div>
                    </div>
                    <div className="pt-12 w-full text-black text-base">

                        <label className="pb-2">E-mail address</label><br />
                        <input placeholder="Placeholder" onChange={onChangeUserEmail} value={userEmail} type="email" required className="border w-full px-3 py-2"/>
                        {
                            emailMessage && 
                            <h6 style={{color: 'red'}}>{emailMessage}</h6>
                        }
                    </div>
                    <div className="pt-6 w-full text-black text-base">
                        <label className="pb-2">Password</label><br />
                        <input placeholder="Placeholder" onChange={onChangePassword} value={password} type="password" required className="border w-full px-3 py-2"/>

                    </div>
                    <div className="pt-6 w-full text-black text-base flex justify-between">
                        <div className="flex">
                            <input type="checkbox" /> 
                            <label className="pl-2">Remember me</label>
                        </div>
                        <a className="underline text-[#214559] font-semibold">Forgot Password</a>
                    </div>
                    <div className="w-full pt-12">
                        <button className="w-full text-white bg-[#214559] h-12 hover:bg-[#377395]" onClick={handleLogin}>
                            {
                                loading ?  <CircularProgress color="secondary" /> : "LOG IN"
                            }
                            
                        </button>
                    </div>
                    <div className="pt-12 w-full  items-center text-center font-inter text-base">
                        <div className="mx-auto">
                            <span className="font-medium text-[#818385]">Don't have an account?</span>
                            <span className="pl-2 font-semibold text-[#0380F3] underline">Sign Up</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
  );
};
export default Login;