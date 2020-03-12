import React, { useState } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { ThemeNames } from 'constants/Themes'
import CommonLayout from 'layouts/Common'
import { Link } from 'gatsby'

const IndexPage: React.StatelessComponent = () => {
  const getRandom = (n: number) => Math.random() * (n-2) - n/2 + 2

  const [HR, setHR] = useState(getRandom(6))

  return (
    <CommonLayout>
      <Container$>
        <Title$>Sketches</Title$>
        <MainPageNav$>
          <Link$ tabIndex={1} hr={HR} onMouseOver={() => setHR(getRandom(6))} to='/css-goo'>Pure CSS gooey effect</Link$>
          <Link$ tabIndex={2} hr={HR} onMouseOver={() => setHR(getRandom(6))} to='/vertices-oscillate'>Oscillating vertices</Link$>
          <Link$ tabIndex={3} hr={HR} onMouseOver={() => setHR(getRandom(6))} to='/poly'>Sine polygons</Link$>
          <Link$ tabIndex={4} hr={HR} onMouseOver={() => setHR(getRandom(6))} to='/mandelbrot'>Mandelbrot Set</Link$>
        </MainPageNav$>
      </Container$>
    </CommonLayout>
  )
}

export default IndexPage

const Container$ = styled.div`
  width: 100%;
  max-width: 720px;
  padding: 0 10px;
  margin: 0px auto;
`

const Title$ = styled.h2`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #b3891f;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Link$ = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  color: #333;
  font-size: 42px;
  display: inline-block;
  width: auto;
  text-decoration-color: #ffb700;
  text-decoration-skip-ink: auto;
  transform: rotate(0);
  transition: transform .2s ease;
  transform-origin: 50% 0%;
  will-change: transform;
  
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &:focus,
  &:hover {
    outline-color: #ffb700;
    color: #111;
    transform: rotate(${({ hr }: { hr: number }) => hr}deg);
  }
`

const MainPageNav$ = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`