import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Welcome page', module).add(
  'welcome',
  () => (
    <>
      <h1>欢迎</h1>
    </>
  ),
  {
    info: {disable: true},
  },
)
