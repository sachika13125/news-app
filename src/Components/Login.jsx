import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Login.css';
import loginGif from '../assets/bubble-gum-pink-phone-and-circle-with-check-mark-inside.gif';
import boyGif from '../assets/bubble-gum-support.gif';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      console.log('Login Succesful:', user);
    } catch (error) {
      console.error('Login Error:', error.message);
      setError('Invalid Email or Password');
    }
  };

  return (
    <div className='login-page'>
      <h1>Log In</h1>
      <div className='login-form'>
        <label>Email:
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
        </label>
        <br />
        <label>Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </label>
        <br />
        <button onClick={handleLogin}>Log In</button>
        {error && <p className='error-message'>{error}</p>}
      </div>
      <img className='phone' src={loginGif} alt='phone and circle with check mark inside'/>
      <img className='boy' src={boyGif} alt='a boy flying in the sky'/>
    </div>
  );
}

export default Login;