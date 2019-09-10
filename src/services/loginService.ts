import { Axios } from '../util';
import { loginConstants } from '../constants';
import { ILoginParams, ILoginResponse } from '../interfaces';

const { instance } = new Axios({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

const login = async (params: ILoginParams) => {
  const res = await instance.post<ILoginResponse>(loginConstants.LOGIN_URL, params);
  return res.data;
};

export const loginService = {
  login,
};
