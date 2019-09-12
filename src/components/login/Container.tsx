import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './index.css';
import { Card, CardSection, Label, Input, Button, Separator } from '../common';
import { useLogin } from '../../hooks';
import { Session } from '../../util';

export const LoginContainer: FC<RouteComponentProps> = (props) => {
  const [loginResult, callLogin] = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (Session.isValid()) {
      props.history.replace('/');
    }

    // Unmount
    return () => {
      setEmail('');
      setPassword('');
    }
  }, [loginResult.data]);

  const login = () => {
    // TODO: Real validation
    if (email && password) {
      callLogin({ email, password });
    }
  };

  return (
    <div className='login-container login-bg'>
      <div className='flex-wrapped full-width flex-justify-center'>
        <Card className='login-card'>
          <CardSection wrapped fullWidth className='flex-justify-center'>
            <p className='login-card-title default-colored'>Login</p>
          </CardSection>
          <CardSection wrapped fullWidth className='flex-justify-center'>
            <Separator text='•' />
          </CardSection>
          <CardSection wrapped fullWidth>
            <Label labelFor='login-email' text='E-mail' />
            <Input
              fullWidth
              type='text'
              id='login-email'
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </CardSection>
          <CardSection wrapped fullWidth>
            <Label labelFor='login-password' text='Password' />
            <Input
              fullWidth
              type='password'
              id='login-password'
              value={password}
              onChange={(value) => setPassword(value)}
              onKeyPress={(e) => e.key === 'Enter' && login()}
            />
          </CardSection>
          <CardSection wrapped fullWidth>
            <Button
              disabled={loginResult.loading}
              onClick={login}
              className='login-card-button'
              fullWidth
              color='blue'
            >
              {loginResult.loading ? 'Logging in...' : 'Login'}
            </Button>
          </CardSection>
          <CardSection wrapped fullWidth className='flex-justify-center'>
            <a href="#">Forgot Password</a>
          </CardSection>
        </Card>
      </div>
    </div>
  )
}
