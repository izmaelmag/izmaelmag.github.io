import React from 'react'
import { GlobalStyles$ } from 'constants/Styles'
import { Layout$ } from './styles'

const FullscreenDemo: React.FunctionComponent = ({ children }) => (
  <Layout$>
    <GlobalStyles$ />
    {children}
  </Layout$>
)

export default FullscreenDemo