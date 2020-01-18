import styled, { css, keyframes } from 'styled-components'

export const blobColors = ['red', 'limegreen', 'blue', 'yellow']
  
const rotate720 = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Goo$ = styled.button`
  display: block;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  filter: blur(10px) contrast(20);
  cursor: pointer;
`

export const Blob$ = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: red;
  position: absolute;
  top: 50%;
  left: calc(50% + 64px);
  margin: -32px 0 0 -32px;
  transform-origin: -32px 50%;
  transform: rotate(0deg);
  animation: ${rotate720} 2s linear infinite;
  background: ${({ color }) => color ? color : 'red'};

  ${
    blobColors.map((color, i) => css`
      &:nth-child(${i+1})  {
        animation-duration: ${2 + (i+1) * Math.random()}s;
      }
    `)
  }
`