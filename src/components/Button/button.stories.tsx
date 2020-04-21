import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Button, {ButtonSize, ButtonType} from './button'

const defaultButton = () => <Button onClick={action('clicked')}>默认 Button</Button>

const buttonWithSize = () => (
  <>
    <Button size={ButtonSize.Large}>Large button</Button>
    <Button>Default button</Button>
    <Button size={ButtonSize.Small}>Small button</Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button buttonType={ButtonType.Default}>Default button</Button>
    <Button buttonType={ButtonType.Primary}>Primary button</Button>
    <Button buttonType={ButtonType.Danger}>Danger button</Button>
    <Button buttonType={ButtonType.Link}>Link</Button>
  </>
)

storiesOf('Button  Component', module)
  .add('Button', defaultButton)
  .add('大小 Button', buttonWithSize)
  .add('类型 Button', buttonWithType)
