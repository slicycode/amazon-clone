import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, Auth } from './firebase'
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        // after login in an existing account, redirect to homepage
        .then(auth => {
            history.push('/')
        })
        .catch(err => alert(err.message));
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email / password
            console.log(auth);
            // after creating an account, redirect to homepage
            if(auth) {
                history.push('/')
            }
        })
        .catch(err => alert(err.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt="amazon logo" />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} 
                    className='login__signInButton'>Sign In</button>
                </form>

                <p>By continuing, you agree to <b>AMAZON FAKE CLONE's</b> Conditions of Use and Privacy Notice.</p>
                
                <button onClick={register}
                className='login__registerButton'>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
