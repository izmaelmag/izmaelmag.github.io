import React from 'react'
import { action, decorate } from '@storybook/addon-actions';
import Range from '.'

export default {
  title: 'Range Input',
  component: Range,
}

export const Simple = () => (
  <Range
    label='Test range input'
    values={[1, 20, 1]}
    handleChange={action(`New value: `)}
  />
)

export const WithValue = () => (
  <Range
    label='Value'
    showValue
    values={[0, 20, 2]}
    handleChange={action(`New value: `)}
  />
)