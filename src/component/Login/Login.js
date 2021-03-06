import React, { useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.init";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import '../../styles/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";
import axios from "axios";

const Login = () => {

  const [user] = useAuthState(auth);


  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [signInWithEmailAndPassword, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    console.log(validEmail);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invaild email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    console.log(validPassword);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimun 6 chracters" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const resetPassword = async  () => {
    const email = userInfo.email;
    if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }
      else{
        toast('pleace enter your email address')
      }
  }
  const handleLogin = async(e) => {
    e.preventDefault();
    const email = userInfo.email;
    const password = userInfo.password;
    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('http://localhost:5000/login', {email});
    localStorage.setItem('accessToken', data.accessToken);
    navigate(from, { replace: true });
  };



  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(()=> {
      if(user){
          navigate(from)
      }
  },[user])
  if(loading || sending){
      return <Loading></Loading>
    }

  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Your Email"
          onChange={handleEmailChange}
        />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        {errors?.password && <p className="error-message">{errors.password}</p>}
        <button>Login</button>
        <p className="pt-3 px-2">
          Don't have an account? <Link className="text-decoration-none" to="/register">Register</Link>
        </p>
        <p className="px-2">
        Forget to Password? <span className="text-primary btn btn-link text-decoration-none" onClick={resetPassword}>Reeet Password</span>
        </p>
        <ToastContainer />
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
