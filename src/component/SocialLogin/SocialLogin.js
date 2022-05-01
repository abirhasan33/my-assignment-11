import React from 'react';
import Google from './google.png'
import github from './github_.png'
import auth from '../../Firebase/Firebase.init';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
// import auth from '';
// import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import Loading from '../../Loading/Loading';


const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate()

  let errorElement;
  if (error || error1) {
    errorElement = <div>
    <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
  </div>
  }

  if(user || user1){
    navigate('/home');
  }

  if(loading || loading1){
    return <Loading></Loading>
  }
    return (
        <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="pt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}

      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-10 d-block mx-auto"
        >
          <img style={{ width: "33px" }} src={Google} alt="" />
          <span className="px-3">Google Sign In</span>
        </button>
      </div>

      <div>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-100 d-block mx-auto my-3"
        >
          <img style={{ width: "33px" }} src={github} alt="" />
          <span className="px-3">Github Sign In</span>
        </button>
      </div>
    </div>

    );
};

export default SocialLogin;