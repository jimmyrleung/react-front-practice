import React, { useEffect } from 'react';
import { withAuthentication } from '../../hocs';
import './index.css';
import { TodoForm, TodoList } from '../todo';
import { RouteComponentProps } from 'react-router-dom';
import { Session } from '../../util';
import { useCreateTodo, useTodoList, useRemoveTodo } from '../../hooks';
import { ITodoParams } from '../../interfaces';

const HomeContainerComponent: React.FC<RouteComponentProps> = (props) => {
  const [createResult, callCreateTodo] = useCreateTodo();
  const [todoList, fetchTodoList] = useTodoList();
  const [, callRemoveTodo] = useRemoveTodo();

  useEffect(() => {
    fetchTodoList();
  }, []);

  const logout = () => {
    Session.clear();
    props.history.replace('/login');
  };

  const createTodo = async (params: ITodoParams) => {
    await callCreateTodo(params);
    await fetchTodoList();
  };

  const removeTodo = async (todoId?: string) => {
    if (todoId) {
      await callRemoveTodo(todoId);
      await fetchTodoList();
    }
  }

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
            <a onClick={() => logout()} className='menu-item'>Logout</a>
          </div>
        </header>

        {/* todo-section */}
        <section className='todo-container full-width full-height flex-wrapped flex-justify-center'>
          <TodoForm
            create={createTodo}
            isSending={createResult.loading}
          />
          <TodoList
            isLoading={todoList.loading}
            items={todoList.data}
            onRemoveClick={todoId => removeTodo(todoId)}
          />
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
