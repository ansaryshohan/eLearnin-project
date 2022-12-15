import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const Login = () => {
  const [givenEmail, setGivenEmail]=useState('')
  const { signIn, forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setGivenEmail(email)

    signIn(email, password)
      .then(res => {
        const user = res.user;
        console.log(user)
        navigate('/')
        toast.success('welcome to eLearning platform')
      })
      .catch(
        err => toast.error(`${err}`)
      )
  }
   const handleForgetPassword=()=>{
    // console.log(givenEmail);
    forgetPassword(givenEmail)
    .then(()=>{toast.success('password reset email is sent to your email')})
    .catch(err=>{ toast.error(`${err}`)})
   }

  return (
    <div className=" min-h-screen bg-base-200">
      <div className="flex flex-col items-center gap-7 lg:flex">
        <div className="text-center lg:text-left  mt-14 text-green-600">
          <h1 className="text-5xl text-accent font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleOnSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="text-sm font-medium">Email</span>
              </label>
              <input
                type="email"
                name='email'
                onBlur={(e)=>setGivenEmail(e.target.value)}
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
                className="input input-bordered" />

              <label className="label">
                <Link href="#" className="label-text-alt link-success link-hover" 
                onClick={handleForgetPassword}>Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-accent text-xl font-bold">Login</button>
            </div>
            <p>
              <small>Create a new account.
                <Link
                  to="/register"
                  className="link-hover link-success uppercase"
                > Register Now</Link>
              </small>
            </p>
          </form>
          <div className="divider">OR Sign In With</div>
        </div>
      </div>
    </div>
  );
};

export default Login; <h1>this is login page</h1>