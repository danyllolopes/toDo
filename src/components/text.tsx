import React from "react";
import { type VariantProps } from "class-variance-authority";
import { textVariants } from "../styles/textVariants";

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
  props?: React.HTMLAttributes<HTMLElement>;
};

const Text = ({ as = 'span', variant, className = '', children, props }: TextProps) => {
  return React.createElement(
        as,
        {
            className: textVariants({ variant, className }),
            ...props
        },
        children
    )
}

export default Text;