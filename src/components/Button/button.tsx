import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string
  /** 设置Button禁用状态 */
  disabled?: boolean

  /** 设置Button禁用大小 'lg' | 'sm' */
  size?: ButtonSize

  /** 设置Button类型 'primary' | 'danger' | 'link' | 'default' */
  buttonType?: ButtonType
  /** Link时的跳转链接，当type为link时生效 */
  href?: string
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = props => {
  const {className, buttonType, disabled, size, children, href, ...restProps} = props

  const classes = classNames('btn', className, {
    [`btn-type-${buttonType}`]: buttonType,
    [`btn-size-${size}`]: size,
    disabled: buttonType === ButtonType.Link && disabled,
  })

  if (buttonType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  buttonType: ButtonType.Default,
  disabled: false,
}

export default Button
