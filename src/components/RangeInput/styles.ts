import styled, { css } from 'styled-components'
import { Colors, Easings } from 'constants/Styles'

const gapSize = 15
const thumbSize = 28

interface RangeThemePropsI {
  theme: {
    showValue: boolean,
    isWide: boolean,
    thumbOffset: number,
    showLimits: boolean,
    withLabel: boolean
  }
}

export const RangeWrapper$ = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.showLimits ? 14 : 0}px;

  span {
    color: ${Colors.CSS.text};
    transition: color .2s ease, transform .2s ${Easings.quadratic};
  }

  &:focus-within:not(:hover) {
    span {
      color: ${Colors.CSS.bg};
    }
  }

  &:hover {
    span {
      transform: translateX(${gapSize + thumbSize/2}px) ${({ theme }: RangeThemePropsI) => !theme.withLabel && `translateY(-${thumbSize - 2}px)` };
    }
  }
`

export const Label$ = styled.div`
  font-size: 12px;
  line-height: 1.5;
  font-weight: 500;
  font-family: sans-serif;
  color: ${Colors.CSS.gray80};
`

export const InputElement$ = styled.input`
  width: calc(100% - ${gapSize*2}px);
  height: ${thumbSize}px;
  background: transparent;
  margin-left: ${gapSize}px;

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &::-moz-range-track,
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: ${Colors.CSS.gray20};
    border-radius: 2px;
    padding: 0 ${gapSize}px;
  }

  &::-moz-range-thumb,
  &::-webkit-slider-thumb {
    border: none;
    height: ${thumbSize}px;
    width: ${({ theme: { isWide, showValue }}: RangeThemePropsI) => thumbSize * (isWide && showValue ? 2 : 1)}px;
    border-radius: ${thumbSize}px;
    background: ${Colors.CSS.bg};
    box-shadow: 0 0 0 3px ${Colors.CSS.blue} inset;
    cursor: move;
    transition: box-shadow .2s ease, width .3s ${Easings.quadratic};
  }

  &:focus,
  &:hover {
    &::-moz-range-thumb,
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 ${({ theme }) => theme.showValue ? thumbSize : 9}px ${Colors.CSS.blue} inset;
    }
  }
`

const getValueOffset = ({ theme: { isWide, showValue, thumbOffset} }: RangeThemePropsI) => {
  return css`
    left: calc((100% - ${2 * gapSize + thumbSize * (isWide && showValue ? 2 : 1)}px) * ${thumbOffset});
  `
}

export const ValueNumber$ = styled.span`
  font-size: 10px;
  line-height: ${thumbSize}px;
  text-align: center;
  font-weight: 500;
  color: ${Colors.CSS.blue};
  width: ${({ theme: { isWide, showValue } }) => thumbSize * (isWide && showValue ? 2 : 1)}px;
  height: ${thumbSize}px;
  position: absolute;
  bottom: 2px;
  margin-left: -${gapSize - 1}px;
  transform: translateX(${gapSize + thumbSize/2}px);
  pointer-events: none;
  ${getValueOffset};
`

export const Limits$ = styled.div`
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  color: ${Colors.CSS.gray60};
  pointer-events: none;
  line-height: 1;
`