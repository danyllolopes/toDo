import Icon from "./icon"
import SpinnerIcon from '../assets/icons/spinner.svg?react';
import { buttonIconsVariants, buttonIconIconVariants } from '../styles/buttonIconsVariants';
import { type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";

interface ButtonIconProps extends VariantProps<typeof buttonIconsVariants>, Omit<React.ComponentProps<'button'>, 'size' | 'disabled'> {
    icon: React.ComponentProps<typeof Icon>['svg'],
    loading?: boolean;
    handling?: boolean;
}

const ButtonIcon = ({ variant, size, disabled, className, icon, loading, handling, ...props }: ButtonIconProps) => {
    if (loading) return <Skeleton roundend='sm' className={buttonIconsVariants({ variant: 'none', size, className })} />

    return (
        <button className={buttonIconsVariants({ variant, size, disabled, className, handling })} {...props}>
            <Icon svg={handling ? SpinnerIcon : icon} animate={handling} className={buttonIconIconVariants({ variant, size })} />
        </button>
    )
}

export default ButtonIcon