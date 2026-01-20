import React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { skeletonVariants } from '../styles/skeletonVariants'

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, React.ComponentProps<'div'> {}

const Skeleton = ({ roundend, className, ...props }: SkeletonProps) => {
  return (
    <div className={skeletonVariants({ roundend, className })} {...props} />
  )
}

export default Skeleton