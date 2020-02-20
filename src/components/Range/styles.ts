import styled from 'styled-components'

export const RangeWrapper$ = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label$ = styled.span`
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: sans-serif;
`

export const InputElement$ = styled.input`
  width: 100%;
  height: 16px;

  &:focus {
    outline: none !important;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &::-moz-range-track,
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: #FF8300;
    border-radius: 10px;
  }

  &::-moz-range-thumb,
  &::-webkit-slider-thumb {
    border: 2px solid #FF8300;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #FFFFFF;
    cursor: move;
  }
`