import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const CommonLayout: React.FunctionComponent = (props) => {
  return (
    <Body$>
      <GlobalStyles$ />
      {props.children}
    </Body$>
  );
};

export default CommonLayout

const Body$ = styled.div`
  width: 100%;
  min-height: 100%;
`;

const GlobalStyles$ = createGlobalStyle`
  body, html {
    margin: 0;
    width: 100vw;
    min-height: 100vh;
  }
`;
