import React from 'react';
import styled from 'styled-components';
import { Colors, GlobalStyles$ } from 'constants/Styles';
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
  min-height: 100vh;
  background: ${Colors.CSS.bg};
  padding: 32px;

  ${Media.Phone`
    padding: 24px 20px;
  `}
`;