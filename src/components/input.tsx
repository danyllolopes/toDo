import { type VariantProps, cx } from "class-variance-authority"
import { inputTextVariants } from "../styles/inputVariants"
import { textVariants } from "../styles/textVariants"

interface InputTextProps extends VariantProps<typeof inputTextVariants>, Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {}

const Input = ({ size, disabled, className, ...props }: InputTextProps) => {
  return (
    <input className={cx(inputTextVariants({ size, disabled, className }),  textVariants(), className)} {...props} />
  )
}

export default Input