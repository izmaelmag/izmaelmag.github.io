import React from 'react'
import styled from 'astroturf'
import { Colors } from ''

const Title = styled('h1')`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  line-height: 1.25;
  color: ${Colors.black};
`

const PageTitle = ({ children }) => {

  return (
    <Title>
      {children}
    </Title>
  )
}

export default PageTitle