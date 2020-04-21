import React from 'react'
import {addDecorator, addParameters, configure} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import '../src/styles/index.scss'
import './fixCssBug.css'

addDecorator(withInfo)
addParameters({
  info: {
    inline: true,
  },
})

const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')]
  const req = require.context('../src/components', true, /\.stories\.tsx$/)
  req.keys().forEach(fname => allExports.push(req(fname)))
  return allExports
}

configure(loaderFn, module)
