import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate= useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(res => {
        const user = res.user;
        console.log(user)
        navigate('/')
      })
      .catch(
        err => console.error(err)
      )
  }

  return (
    <div className=" min-h-screen bg-base-200">
      <div className="flex flex-col items-center gap-7 lg:flex">
        <div className="text-center lg:text-left  mt-14 text-green-600">
          <h1 className="text-5xl font-bold">Login now!</h1>
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
                <Link href="#" className="label-text-alt link-success link-hover mt-2">Forgot password?</Link>
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