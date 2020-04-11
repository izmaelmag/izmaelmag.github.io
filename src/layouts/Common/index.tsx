import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { SansSerif, UnderlineText, CSSColors, CSSColorsNames } from 'constants/Styles';
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
  background: var(${CSSColorsNames.background});
`;


const GlobalStyles$ = createGlobalStyle`
  body, html {
    ${SansSerif}
    ${CSSColors}
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
    color: var(${CSSColorsNames.text});
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
    color: var(${CSSColorsNames.link.text});
    text-decoration: none;
    font-weight: 500;
    ${UnderlineText({ color: `var(${CSSColorsNames.link.underline})`, position: 1.2 })}
    
    &:hover {
      ${UnderlineText({ color: `var(${CSSColorsNames.link.hover.underline})`, position: 1.2 })}
    }
  }
`;
