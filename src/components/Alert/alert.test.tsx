import React from 'react'
import {render} from '@testing-library/react'
import Alert from './alert'

describe('test Alert component',() => {
  it('render the correct Alert box', () => {
    const warpper = render(<Alert title={'hello'} alertType={'success'}></Alert>)
    const element = warpper.getByText('hello')
    expect(element).toBeInTheDocument()
    expect(element.parentElement).toHaveClass('alert-success')
    // expect(element?.getAttribute('alertType')).toEqual('success')
  })
})