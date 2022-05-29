import React from 'react';
import * as Styled from './styles';

export type HelloWorldProps = {
  children?: React.ReactNode;
};
const HelloWorld = () => {
  return (
    //
    <Styled.Container data-testid="title">Hello World!</Styled.Container>
  );
};

export default HelloWorld;
