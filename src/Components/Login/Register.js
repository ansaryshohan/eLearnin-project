import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    photUrl:"",
    email: "",
    password: ""
  })

  const handleName=(e)=>{
    const name= e.target.value;
    setUserInfo({...userInfo,fullName: name })
    console.log(userInfo)
    
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className=" min-h-screen bg-base-200">
      <div className="flex flex-col items-center gap-7 lg:flex">
        <div className="text-center lg:text-left  mt-14 text-green-600">
          <h1 className="text-5xl font-bold">Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleOnSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="text-sm font-medium">Full Name</span>
              </label>
              {/* this is the name field */}
              <input
               onChange={handleName}
                type="text"
                name='full-name'
                placeholder="full name"
                className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-sm font-medium">PhotoURL</span>
              </label>
              <input
                type="text"
                name='photUrl'
                placeholder="your photo url here"
                className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-sm font-medium">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-sm font-medium">Password</span>
              </label>

              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required />

              <label className="label">
                <Link href="#" className="label-text-alt link-success link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-accent text-xl font-bold">
                SIGN UP
              </button>
            </div>
            <p>
              <small>Already have an account?
                <Link
                  to="/login"
                  className="link-success uppercase link-hover"
                > login</Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;