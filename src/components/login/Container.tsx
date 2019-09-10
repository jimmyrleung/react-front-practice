import React, { FC } from 'react';
import './Login.css';
import { Card, CardSection, Label, Input, Button } from '../common';

export const LoginContainer: FC = () => {
  return (
    <div className='login-container login-bg'>
      <div className='flex-wrapped full-width flex-justify-center'>
        <Card className='login-card'>
          <CardSection wrapped fullWidth className='flex-justify-center'>
            <p className='login-card-title'>Login</p>
          </CardSection>
          <CardSection wrapped fullWidth className='flex-justify-center'>
            <span className='login-card-separator'></span>
            <span className='login-card-separator-character'>•</span>
            <span className='login-card-separator'></span>
          </CardSection>
          <CardSection wrapped fullWidth>
            <Label labelFor='login-email' text='E-mail' />
            <Input fullWidth type='text' id='login-email' />
          </CardSection>
          <CardSection wrapped fullWidth>
            <Label labelFor='login-password' text='Password' />
            <Input fullWidth type='password' id='login-password' />
          </CardSection>
          <CardSection wrapped fullWidth>
            <Button className='login-card-button' fullWidth>Login</Button>
          </CardSection>
          <CardSection wrapped fullWidth className='flex-justify-center'>
            <a href="#">Esqueci minha senha</a>
          </CardSection>
        </Card>
      </div>
    </div>
  )
}
