import React from 'react';
import { withAuthentication } from '../../hocs';

const HomeContainerComponent: React.FC = () => {
  return (
    <h1>Home</h1>
  );
};

const HomeContainer = withAuthentication(HomeContainerComponent);

export {
  HomeContainer,
};
