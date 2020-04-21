import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Button, {ButtonProps, ButtonSize, ButtonType} from './button'

const defaultProps = {
  onClick: jest.fn(),
}

const testProps: ButtonProps = {
  buttonType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'test-class',
}

const linkProps: ButtonProps = {
  buttonType: ButtonType.Link,
  href: 'https://www.baidu.com/',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeFalsy()
    expect(element).toHaveClass(`btn-size-lg btn-type-primary ${testProps.className}`)
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button {...linkProps}>Link</Button>)
    const element = wrapper.getByText('Link') as HTMLAnchorElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('A')
    expect(element).toHaveClass('btn-type-link')
    expect(element.href).toBe(linkProps.href)
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Disable Button</Button>)
    const element = wrapper.getByText('Disable Button') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
