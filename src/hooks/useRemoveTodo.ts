import { useState } from 'react';
import { IRequestHook } from '../interfaces';
import { todoService } from '../services';

type UseTodoListHook = [IRequestHook<any>, (todoId: string) => Promise<void>];

const useRemoveTodo = (): UseTodoListHook => {
  const [hookData, setHookData] = useState({
    data: null,
    error: null,
    loading: false
  });

  const callRemoveTodo = async (todoId: string) => {
    try {
      setHookData({ ...hookData, error: null, loading: true });
      await todoService.removeTodo(todoId);
      setHookData({ data: null, error: null, loading: false });
    }
    catch (err) {
      setHookData({
        data: null,
        error: err.response || err.request || {},
        loading: false
      });
    }
  };

  return [hookData, callRemoveTodo];
}

export { useRemoveTodo };
