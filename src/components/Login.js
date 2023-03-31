import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.js'
import logo from '../images/dog_logo.png'

function Login() {

    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                history('/');
                alert('Logged in successfully')
            })
            .catch(e => alert(e.message))

    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert("Account registered")
            })
            .catch(e => alert(e.message))

    }

    return (
        <div className='login_page'>
            <div className="image">
                <img src="https://spca.bc.ca/wp-content/uploads/family-outdoors-two-kids-two-dogs-825x551.jpg" alt="" />
            </div>
            <div className="login__container">
                <Link to='/'>
                    <img src={logo} alt="" className="login__logo" />
                </Link>

                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>Not registered?</p>
                <button onClick={register} className="login__registerButton">Create your Account</button>

            </div>
        </div>

    );
}

export default Login