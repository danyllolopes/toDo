import { cva } from "class-variance-authority";

export const skeletonVariants = cva(`animate-pulse bg-gray-200 pointer-events-none`, {
    variants: {
        roundend: {
            sm: 'rounded-sm',
            lg: 'rounded-lg',
            full: 'rounded-full'
        }
    },
    defaultVariants: {
        roundend: 'lg'
    }
});