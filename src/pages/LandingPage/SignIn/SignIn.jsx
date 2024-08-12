import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='signIn-container'>
            <div className='heading'>
                <h2>Sign in to continue</h2>
                <h3>Not a member yet?
                    <Link to="/signup" className='auth-link'>
                        <span>Register</span>
                    </Link>
                </h3>
            </div>
            <form className='signIn-form'>
                <input type='text' placeholder='Enter Your Acc Number' required/>
                <input type='password' placeholder='Password' required/>
                <button>Login In</button>
                <h4>
                    <span>Forgot your password?</span>
                </h4>
            </form>
        </div>
    )
}

export default SignIn;
