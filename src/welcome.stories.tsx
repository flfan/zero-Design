import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 zero-design 组件库</h1>
        <p>zero-design 是我开发组件库的学习作品</p>
        <h3>安装试试</h3>
        <code>
          npm install zero-design --save
        </code>
      </>
    )
  }, { info : { disable: true }})