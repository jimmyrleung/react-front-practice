import { Axios } from '../util';
import { todoConstants } from '../constants';
import { ITodo, ITodoParams } from '../interfaces';

const { instance } = new Axios({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

const fetchTodos = async () => {
  const res = await instance.get<ITodo[]>(todoConstants.TODOS_URL);
  return res.data;
};

const removeTodo = async (todoId: string) => {
  const url = `${todoConstants.TODOS_URL}/${todoId}`;
  const res = await instance.delete(url);
  return res.data;
}

const create = async (params: ITodoParams) => {
  const res = await instance.post(`${todoConstants.TODOS_URL}`, params);
  return res.data;
}

export const todoService = {
  fetchTodos,
  removeTodo,
  create
};
