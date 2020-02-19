import React from 'react'
import { action } from '@storybook/addon-actions';
import Range from '.'

export default {
  title: 'Range Input',
  component: Range,
}

export const Simple = () => (
  <Range
    min={1}
    max={5}
    step={1}
    onChange={action('Set value')}
  />
)