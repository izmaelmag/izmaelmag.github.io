import React from 'react'
import { action } from '@storybook/addon-actions';
import Toggle from '.'

export default {
  title: 'Toggle',
  component: Toggle,
}

export const Simple = () => (
  <Toggle
    initialState={true}
    onChange={(s: boolean) => action(s.toString())}
  />
)