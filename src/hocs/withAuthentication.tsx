import React from 'react'
import { Session } from '../util';
import { Redirect } from 'react-router-dom';

const withAuthentication = (WrappedComponent: any) => {

  const WithAuthentication = (props: any) => {
    return Session.isValid() ?
      <WrappedComponent {...props} /> :
      <Redirect to='/login' />
  }

  return WithAuthentication;

}

export { withAuthentication };
