import React from "react"
import { iconVariants } from "../styles/iconVariants";
import type { VariantProps } from "class-variance-authority";

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

const Icon = ({ svg: SvgComponent, animate, className, ...props }: IconProps) => {
    return <SvgComponent className={iconVariants({ animate, className })} {...props} />
}

export default Icon;