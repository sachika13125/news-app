import React, { useState } from 'react';
import './Login.css';
import loginGif from '../assets/bubble-gum-pink-phone-and-circle-with-check-mark-inside.gif';
import boyGif from '../assets/bubble-gum-support.gif';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('isLoggedIn'));

  const handleLogin = () => {
    if (username === 'userName' && password === 'password') {
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div className='login-page'>
        <h1>Log In</h1>
      {isLoggedIn ? (
        <div>
            <p>The user is already logged in.</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div className='login-form'>
            <label>User Name:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleLogin}>Log In</button>
        </div>
      )}
      <img className='phone' src={loginGif} alt='phone and circle with check mark inside'/>
      <img className='boy' src={boyGif} alt='a boy flying in the sky'/>
    </div>
  );
}

export default Login;