import * as jwt from 'jsonwebtoken';

const sessionKey = process.env.REACT_APP_SESSION_KEY;

export interface ISessionPayload {
  _id: string;
  name: string;
  email: string;
  iat: number;
  ext: number;
}

const set = (value: string) => {
  sessionKey && localStorage.setItem(sessionKey, value);
}

const get = () => {
  if (sessionKey) {
    return localStorage.getItem(sessionKey);
  }
}

const clean = () => {
  if (!!get()) {
    sessionKey && localStorage.removeItem(sessionKey);
  }
}

const isValid = () => {
  // TODO: Consider token expiration
  return !!get();
}

const payload = () => {
  const token = get();
  if (!token) return null;

  try {
    return jwt.decode(token);
  } catch (err) {
    return null;
  }
}

export const Session = {
  set,
  get,
  isValid,
  clean,
  payload,
}