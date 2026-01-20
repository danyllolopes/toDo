import React from 'react'
import Text from './text'
import { type VariantProps, cx } from 'class-variance-authority'
import { badgeVariants, badgeTextVariants, badgeSkeletonVariants } from '../styles/badgeVariants'
import Skeleton from './skeleton'

interface BadgeProps extends React.ComponentProps<'div'>, VariantProps<typeof badgeVariants> {
  loading?: boolean
}

const Badge = ({
    variant,
    size,
    className,
    children,
    loading,
    ...props
}: BadgeProps) => {
  if (loading) return <Skeleton roundend='full' className={cx(badgeVariants({ variant: 'none' }), badgeSkeletonVariants({ size }), className )} />

  return (
    <div className={badgeVariants({ variant, size,  className })} { ...props }>
        <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>{ children }</Text>
    </div>
  )
}

export default Badge