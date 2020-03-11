import styled from 'styled-components'
import Media from 'utils/Media'

const Title = styled.h1`
  font-family: 'oswald';
  text-transform: uppercase;
  font-size: 48px;
  letter-spacing: 2px;
  font-weight: 300;
  margin: 0;
  line-height: 1;
  color: ${({ theme }) => theme.text};

  a,
  a:visited {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  ${Media.Phone`
    font-size: 32px;
  `}
`

export default Title
