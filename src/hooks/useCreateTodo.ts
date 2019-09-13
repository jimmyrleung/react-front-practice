import { useState } from 'react';
import { IRequestHook, ITodoParams } from '../interfaces';
import { todoService } from '../services';

type UseTodoListHook = [IRequestHook<any>, (params: ITodoParams) => Promise<void>];

const useCreateTodo = (): UseTodoListHook => {
  const [hookData, setHookData] = useState({
    data: null,
    error: null,
    loading: false
  });

  const callCreateTodo = async (params: ITodoParams) => {
    try {
      setHookData({ ...hookData, error: null, loading: true });
      await todoService.create(params);
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

  return [hookData, callCreateTodo];
}

export { useCreateTodo };
