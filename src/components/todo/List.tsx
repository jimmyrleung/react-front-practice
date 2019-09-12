import React, { useState } from 'react';
import { Card, CardSection } from '../common';
import './index.css';

export const TodoList: React.FC = () => {

  return (
    <Card className='todo-list-card'>
      <CardSection fullWidth wrapped>
        <p className='todo-list-card-title'>'To do' list</p>
      </CardSection>
      <CardSection fullWidth wrapped className='todo-list-items'>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        <Card className='todo-list-item'>
          <div className='todo-header'>
            <p className='todo-header-text'>Dishes</p>
            <span className='todo-header-remove'>x</span>
          </div>
          <p className='todo-content-text'><em>Do all the dishes</em></p>
        </Card>
        
      </CardSection>
    </Card >
  )
}