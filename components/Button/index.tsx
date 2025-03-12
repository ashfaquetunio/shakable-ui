import type React from "react"
import "./styles.css"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "outline" | "ghost"
  /**
   * The size of the button
   * @default 'md'
   */
  size?: "sm" | "md" | "lg"
  /**
   * Button contents
   */
  children: React.ReactNode
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Is the button in a loading state?
   * @default false
   */
  isLoading?: boolean
  /**
   * Additional class names
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "md",
  children,
  isLoading = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClassName = "button"
  const variantClassName = `button--${variant}`
  const sizeClassName = `button--${size}`
  const loadingClassName = isLoading ? "button--loading" : ""

  const combinedClassNames = [baseClassName, variantClassName, sizeClassName, loadingClassName, className]
    .filter(Boolean)
    .join(" ")

  return (
    <button type="button" className={combinedClassNames} disabled={isLoading || props.disabled} {...props}>
      {isLoading && (
        <span className="button__spinner">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
        </span>
      )}
      <span className={isLoading ? "button__text--loading" : ""}>{children}</span>
    </button>
  )
}

export default Button

