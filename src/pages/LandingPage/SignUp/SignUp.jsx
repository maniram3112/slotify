import React from 'react'
import { Link } from 'react-router-dom'
import '../LandingPage.css'

const SignUp = ({onLogin}) => {

    const handleSubmit = (target) => {
        target.preventDefault();
        onLogin();
    }

    return (
        <div className='container'>
            <div className='heading'>
                <h2>Sign Up to get started</h2>
                <h3>Already a member?
                    <Link to='/signin'>
                        <span>Login</span>
                    </Link>
                </h3>
            </div>
            <form className='forms' onSubmit={handleSubmit}>
                <input type='text' required placeholder='Enter your First name'/>
                <input type='text' required placeholder='Enter your Last name'/>
                <input type='text' required placeholder='Enter your Account Number'/>
                <input type='email' required placeholder='Enter your Mail address'/>
                <input type='password' required placeholder='Enter your password'/>
                <input type='password' required placeholder='Renter your password'/>
                <button className='custom-btn' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
