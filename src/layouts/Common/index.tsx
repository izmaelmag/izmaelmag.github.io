import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { SansSerif, UnderlineText, CSSColorSchemes, Colors } from 'constants/Styles';
import Media from 'utils/Media'

const CommonLayout: React.FunctionComponent = (props) => {
  return (
    <Body$>
      <GlobalStyles$ />
      {props.children}
    </Body$>
  )
};

export default CommonLayout

const Body$ = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${Colors.CSS.bg};
`;

const GlobalStyles$ = createGlobalStyle`
  body, html {
    ${SansSerif}
    ${CSSColorSchemes}
    margin: 0;
    width: 100vw;
    min-height: 100vh;
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
    color: ${Colors.CSS.text};
    margin: 10px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    ${Media.Phone`
      font-size: 14px;
    `}
  }

  a {
    color: ${Colors.CSS.link};
    text-decoration: none;
    font-weight: 500;
    ${UnderlineText({ color: Colors.CSS.blue20, position: 1.2 })}
    
    &:hover {
      ${UnderlineText({ color: Colors.CSS.blue60, position: 1.2 })}
    }
  }
`;
