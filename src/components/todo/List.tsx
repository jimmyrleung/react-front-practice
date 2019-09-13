import React from 'react';
import './index.css';
import { Card, CardSection } from '../common';
import { ITodo } from '../../interfaces';

interface IOwnProps {
  isLoading: boolean;
  items: ITodo[];
  onRemoveClick(todoId: string): void;
};

const TodoList: React.FC<IOwnProps> = ({ isLoading, items, onRemoveClick }) => {
  return (
    <Card className='todo-list-card'>
      <CardSection fullWidth wrapped>
        <p className='todo-list-card-title'>'To do' list</p>
      </CardSection>
      {
        !isLoading &&
        <CardSection fullWidth wrapped className='todo-list-items'>
          {
            items.length > 0 && items.map((todo, i) =>
              (
                <Card key={`todo-index-${i}`} className='todo-list-item'>
                  <div className='todo-header'>
                    <p className='todo-header-text'>{todo.name}</p>
                    <span onClick={() => onRemoveClick(todo._id || '')} className='todo-header-remove'>x</span>
                  </div>
                  <p className='todo-content-text'><em>{todo.description}</em></p>
                </Card>
              )
            )
          }
        </CardSection>
      }
    </Card >
  )
}

export { TodoList }