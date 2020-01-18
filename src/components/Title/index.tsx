import React from 'react'
import styled from 'styled-components'
import { PageThemeI } from 'constants/Themes'
import Media from 'utils/Media'
import { Link } from 'gatsby'

const Title = styled(Link)`
  font-family: 'oswald';
  text-transform: uppercase;
  font-size: 48px;
  letter-spacing: 2px;
  font-weight: 300;
  margin: 0;
  line-height: 1;
  padding: 32px 0;
  border-bottom: 1px solid ${({ theme }: PageThemeI) => theme.gray};
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  ${Media.Phone`
    padding: 20px 0;
    font-size: 32px;
  `}
`

export default Title
