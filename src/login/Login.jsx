import React, { useState } from 'react'
import './login.css'
import food from '../assets/food.jpg'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const loginForm = () => {
        setErrorMessage('');                                            // Error message left empty for first time

        if (username === '' || password === '') {                       // Left Empty
            setErrorMessage('All fields are required.');
            return;
        }

        if (username !== 'joseph@gmail.com' || password !== '123') {    // Error Username or Password
            setErrorMessage('Invalid username or password.');
            return;
        }

        alert('Login successful!...');                      // Login Sucesss
    }

    return (
        <div className='login-container'>
            <div className='login-section'>
                <div className='login-section-left'>
                    <h2>Welcome to Rderly Kiosk</h2>
                    <div className='login-section-title'>
                        <div className='login-section-title-intro'>
                            <span>Explore our delicious meny and place your</span>
                            <span>order effortlessly</span>
                        </div>
                        <div className='login-section-title-input'>
                            <div className='input-icon'>
                            <i class="fa-solid fa-envelope"></i>
                                <input type="text" placeholder='Email Address' value={username} onChange={(event) => setUsername(event.target.value)} />
                            </div>
                            <div className='input-icon'>
                            <i class="fa-solid fa-lock"></i>
                            <input type="text" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <button onClick={loginForm}>Login</button>
                        </div>
                        {errorMessage && <div id='error-message'>{errorMessage}</div>} {/*  error message and error message happens, prints the Seterror message */}
                    </div>
                </div>

                <div className='login-section-right'>
                    <img src={food} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
