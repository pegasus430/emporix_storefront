import React, { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import landing_bg from '../assets/landing_bg.png'
import login_atom from '../assets/login_atom.png'
import { login } from "../actions/auth";



const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

   

    dispatch(login(username, password))
    .then(() => {
        props.history.push("/");
        window.location.reload();
    })
    .catch(() => {
        setLoading(false);
    });

  };
  if (isLoggedIn) {
    return <Navigate  to="/" />;
  }

  return (
        <div className="login_container" style={{backgroundImage : `url(${landing_bg})`  }} >
            <div className="w-[540px] mx-auto h-[740px] pt-[138px]">
                <div className="w-full h-[110px] items-center  text-center text-white font-bold font-inter text-7xl flex">
                    <div className="mx-auto flex">
                        <img src={login_atom} className="w-[78px] h-[86px] mr-5"  />
                        atom
                    </div>
                    
                </div>
                <div className="w-full bg-white p-12  shadow-2xl">
                    <div className="pt-12 text-center">
                        <div className="font-inter font-bold text-3xl text-[#377395]">Log in to your account</div>
                        <div className="text-xl font-inter font-medium text-[#818385] pt-6">Welcome back! Please enter your details</div>
                    </div>
                    <div className="pt-12 w-full text-black text-base">

                        <label className="pb-2">E-mail address</label><br />
                        <input placeholder="Placeholder" onChange={onChangeUsername} type="text" required className="border w-full px-3 py-2"/>
                    </div>
                    <div className="pt-6 w-full text-black text-base">
                        <label className="pb-2">Password</label><br />
                        <input placeholder="Placeholder" onChange={onChangePassword} type="password" required className="border w-full px-3 py-2"/>

                    </div>
                    <div className="pt-6 w-full text-black text-base flex justify-between">
                        <div className="flex">
                            <input type="checkbox" /> 
                            <label className="pl-2">Remember me</label>
                        </div>
                        <a className="underline text-[#214559] font-semibold">Forgot Password</a>
                    </div>
                    <div className="w-full pt-12">
                        <button className="w-full text-white bg-[#214559] h-12" onClick={handleLogin}>LOG IN</button>
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