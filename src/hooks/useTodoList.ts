import { useState } from 'react';
import { IRequestHook, ITodo } from '../interfaces';
import { todoService } from '../services';

type UseTodoListHook = [IRequestHook<ITodo[]>, () => Promise<void>];

const useTodoList = (): UseTodoListHook => {
  const [hookData, setHookData] = useState({
    data: [] as ITodo[],
    error: null,
    loading: false
  });

  const fetchTodoList = async () => {
    try {
      setHookData({ ...hookData, error: null, loading: true });
      const res = await todoService.fetchTodos();
      setHookData({ data: res, error: null, loading: false });
    }
    catch (err) {
      setHookData({
        ...hookData,
        error: err.response || err.request || {},
        loading: false
      });
    }
  };

  return [hookData, fetchTodoList];
}

export { useTodoList };
