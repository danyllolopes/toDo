import React from 'react'
import Icon from './icon'
import SpinnerIcon from '../assets/icons/spinner.svg?react';
import type { VariantProps } from 'class-variance-authority'
import { buttonVariants, buttonIconsVariants } from '../styles/buttonVariants'
import Text from './text'

interface ButtonProps extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  icon?: React.ComponentProps<typeof Icon>['svg']
  handling?: boolean
}

const Button = ({ variant, size, disabled, className, children, icon: IconComponent, handling, ...props }: ButtonProps) => {
  return <button className={buttonVariants({ variant, size, disabled, className, handling })} {...props}>
    {IconComponent && <Icon svg={handling ? SpinnerIcon : IconComponent} animate={handling} className={buttonIconsVariants({ variant, size })} />}
    <Text variant={'body-md-bold'} >{children}</Text>
  </button>
}

export default Button