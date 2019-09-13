import { useState } from 'react';
import { IRequestHook, ILoginParams } from '../interfaces';
import { loginService } from '../services';
import { Session } from '../util';

type UseLoginHook = [IRequestHook<any>, (params: ILoginParams) => void];

const useLogin = (): UseLoginHook => {
  const [hookData, setHookData] = useState({
    data: '',
    error: null,
    loading: false
  });

  const callLogin = async (params: ILoginParams) => {
    try {
      setHookData({ data: '', error: null, loading: true });
      const res = await loginService.login(params);
      Session.set(res.token);
      setHookData({ ...hookData, error: null, data: res.token });
    }
    catch (err) {
      setHookData({ ...hookData, error: err.response || err.request || {} });
    }
    finally {
      setHookData({ ...hookData, loading: false });
    }
  };

  return [hookData, callLogin];
}

export { useLogin };
