import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Colors, SansSerif, UnderlineText } from 'constants/Styles';

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
    ${SansSerif}
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    background: ${Colors.Gray100};
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: ${Colors.Black(85)};
    margin: 10px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${Colors.Blue(75)};
    text-decoration: none;

    &:hover {
      color: ${Colors.Blue()};
      ${UnderlineText({ color: Colors.Blue(30), position: 1.2 })}
    }
  }
`;
