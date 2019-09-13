import React, { useState } from 'react';
import './index.css';
import { Card, CardSection, Separator, Label, Input, Button } from '../common';
import { ITodoParams } from '../../interfaces';

interface IOwnProps {
  isSending: boolean;
  create(params: ITodoParams): void;
}

export const TodoForm: React.FC<IOwnProps> = ({ create, isSending }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onCreateClick = () => {
    if (name && description) {
      create({ name, description });
    }
  };

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
          onKeyPress={(e) => e.key === 'Enter' && onCreateClick()}
        />
      </CardSection>
      <CardSection wrapped fullWidth>
        <Button
          disabled={isSending}
          onClick={onCreateClick}
          className='login-card-button'
          fullWidth
          color='blue'
        >
          {isSending ? 'Sending...' : 'Create'}
        </Button>
      </CardSection>
    </Card>
  )
}