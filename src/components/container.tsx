import React from 'react'
import type { VariantProps } from 'class-variance-authority'
import { containerVariants } from '../styles/containerVariants'

interface ContainerProps extends VariantProps<typeof containerVariants>, React.ComponentProps<'div'> {
    as?: keyof React.JSX.IntrinsicElements;
}

const Container = ({ as = 'div', children, className, ...props }: ContainerProps) => {
  return React.createElement(as, { className: containerVariants({ size: 'md', className }), ...props }, children)
}

export default Container