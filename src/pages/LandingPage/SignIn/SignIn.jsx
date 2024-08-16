import React from 'react';
import { Link } from 'react-router-dom';
import '../LandingPage.css';

const SignIn = ({onLogin}) => {

    const handleSubmit = (target) => {
        target.preventDefault();
        onLogin();
    }

    return (
        <div className='container'>
            <div className='heading'>
                <h2>Sign in to continue</h2>
                <h3>Not a member yet?
                    <Link to="/signup">
                        <span>Register</span>
                    </Link>
                </h3>
            </div>
            <form className='forms' onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Your Acc Number' required/>
                <input type='password' placeholder='Password' required/>
                <button className='custom-btn' type='submit'>Login In</button>
                <h4>
                    <span>Forgot your password?</span>
                </h4>
            </form>
        </div>
    )
}

export default SignIn;
