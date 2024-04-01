import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Login.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      console.log('Sign Up Successful:', user);
    } catch (error) {
      console.error('Sign Up Error:', error.message);
    }
  };

  return (
    <div className='login-page'>
        <h1>Sign Up</h1>
        <div className='login-form'>
            <label>User Name:
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            </label>
            <br />
            <label>Password:
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            </label>
            <br />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    </div>
  );
};

export default SignUp;