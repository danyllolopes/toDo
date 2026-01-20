import type { VariantProps } from "class-variance-authority"
import { inputCheckboxVariants, inputCheckboxWrapperVariants, inputCheckboxIconVariants } from "../styles/input-checkboxVariants"
import CheckIcon from '../assets/icons/check-regular.svg?react'
import Icon from "./icon"
import Skeleton from "./skeleton"

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>, Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {
    loading?: boolean
 }

const InputCheckbox = ({ variant, size, disabled, className, loading, ...props }: InputCheckboxProps) => {
    if (loading) return <Skeleton roundend='sm' className={inputCheckboxVariants({ variant: 'none', size })} />

    return (
        <label className={inputCheckboxWrapperVariants({ className })}>
            <input type="checkbox" className={inputCheckboxVariants({ variant, size, disabled, className })}  {...props} />
            <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
        </label>
    )
}

export default InputCheckbox