import React from 'react';
import { withAuthentication } from '../../hocs';
import './index.css';
import { TodoForm, TodoList } from '../todo';

const HomeContainerComponent: React.FC = () => {
  return (
    <>
      <main className='home-container'>
        {/* Menu */}
        <header className='menu-container'>
          <div className='menu-brand'>React Front Practice</div>
          <div className='menu-items'>
            <a href='#' className='menu-item active'>Home</a>
            <a href='#' className='menu-item'>About</a>
            <a href='#' className='menu-item'>Contact</a>
            <a href='#' className='menu-item'>Logout</a>
          </div>
        </header>

        {/* todo-section */}
        <section className='todo-container full-width full-height flex-wrapped flex-justify-center'>
          <TodoForm />
          <TodoList />
        </section>
      </main>
      <div className='home-divider'></div>
    </>
  );
};

const HomeContainer = withAuthentication(HomeContainerComponent);

export {
  HomeContainer,
};
