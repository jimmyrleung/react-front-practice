import React, { FC } from 'react';
import './Login.css';

export const LoginContainer: FC = () => {
  return (
    <div className='login-container login-bg'>
      <div className='flex-row flex-justify-center'>
        <div className='login-card'>
          {/* <div className='flex-row flex-justify-center'>
            <p className='login-card-title'>Login</p>
          </div> */}
          <div className='flex-row'>
            <div className='form-row'>
              <label className='login-card-label' htmlFor='login-email'>E-mail</label>
            </div>
            <div className='form-row'>
              <input className='login-card-input' id='login-email' type='text' />
            </div>
          </div>
          <div className='flex-row'>
            <div className='form-row'>
              <label className='login-card-label' htmlFor='login-password'>Password</label>
            </div>
            <div className='form-row'>
              <input className='login-card-input' id='login-password' type='password' />
            </div>
          </div>
          <div className='flex-row'>
            <div className='form-row'>
              <button className='login-card-button'>Login</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
