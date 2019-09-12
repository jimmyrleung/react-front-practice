import React, { useState } from 'react';
import { Card, CardSection, Separator, Label, Input, Button } from '../common';
import './index.css';

export const TodoForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Card className='todo-form-card'>
      <CardSection wrapped fullWidth className='todo-form-card-title'>
        <p className='full-width todo-form-card-title-text'>Create new 'to do'</p>
      </CardSection>
      <CardSection wrapped fullWidth className='flex-justify-center'>
        <Separator text='•' />
      </CardSection>
      <CardSection wrapped fullWidth>
        <Label labelFor='login-name' text='Name' />
        <Input
          fullWidth
          type='text'
          id='todo-name'
          value={name}
          onChange={(value) => setName(value)}
        />
      </CardSection>
      <CardSection wrapped fullWidth>
        <Label labelFor='login-description' text='Description' />
        <Input
          fullWidth
          type='text'
          id='todo-description'
          value={description}
          onChange={(value) => setDescription(value)}
        // onKeyPress={(e) => e.key === 'Enter' && login()}
        />
      </CardSection>
      <CardSection wrapped fullWidth>
        <Button
          // disabled={loginResult.loading}
          // onClick={login}
          className='login-card-button'
          fullWidth
          color='blue'
        >Create
              {/* {loginResult.loading ? 'Logging in...' : 'Login'} */}
        </Button>
      </CardSection>
    </Card>
  )
}