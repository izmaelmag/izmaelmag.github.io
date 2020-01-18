import styled, { keyframes } from 'styled-components'

const sine = keyframes`
  to {
    transform: translateY(calc(100% + 64px));
  }
`

export const Goo$ = styled.div`
  display: block;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  filter: blur(10px) contrast(20);
  cursor: pointer;
  background: #fafafa;
 
  &::before,
  &::after {
    content: '';
    display: block;
    width: 300px;
    height: 150px;
    background: #222;
    flex-shrink: 0;
    border-radius: 150px 150px 0 0;
    transform: scale(1, 0.784);
    transform-origin: 50% 100%;
  }

  &::after {
    transform-origin: 50% 0;
    border-radius: 0 0 150px 150px;
  }
`

export const Blobs$ = styled.div` 
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 64px;
  width: 300px;
  box-sizing: border-box;
`

export const Blob$ = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #222;
  transform: translateY(-42px);
  animation: ${sine} 2s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.3s;
    animation-duration: 1.6s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
    animation-duration: 2.2s;
  }

  &:nth-child(4) {
    animation-delay: 1.2s;
    animation-duration: 1.7s;
  }

  &:nth-child(5) {
    animation-delay: -0.3s;
    animation-duration: 1.5s;
  }
`
