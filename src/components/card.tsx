import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cardVariants } from "../styles/cardVariants";

interface CardProps extends VariantProps<typeof cardVariants>, React.ComponentProps<'div'> {
    as?: keyof React.JSX.IntrinsicElements;
}

const Card = ({ as = 'div', size, children, className, ...props }: CardProps) => {
    return React.createElement(
        as,
        {
            className: cardVariants({ size, className }),
            ...props
        },
        children
    )
}

export default Card;