import React from 'react'
import './style.css'


const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p3 ronded w-25 border loginForm'>
            <h2>Login Page</h2>
            <form>
                <div>
                    <label htmlFor='email'><strong>Email:</strong></label>
                    <input type="email" name="email" autoComplete='off'
                    placeholder='Enter Email' className='form-control rounded-0'></input>
                </div>
                <div>
                    <label htmlFor='password'><strong>Password:</strong></label>
                    <input type="password" name="password"
                    placeholder='Enter password' className='form-control rounded-0'></input>
                </div>
                <button className='btn btn-success w-100 rounded-0'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login