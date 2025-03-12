"use client"

import type React from "react"
import "./styles.css"

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /**
   * Form contents
   */
  children: React.ReactNode
  /**
   * Function called when the form is submitted
   */
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  /**
   * Form layout
   * @default 'vertical'
   */
  layout?: "vertical" | "horizontal" | "inline"
  /**
   * Additional class names
   */
  className?: string
}

export interface FormItemProps {
  /**
   * Label for the form item
   */
  label?: React.ReactNode
  /**
   * Form control element
   */
  children: React.ReactNode
  /**
   * Optional help text
   */
  help?: React.ReactNode
  /**
   * Optional error message
   */
  error?: React.ReactNode
  /**
   * Whether this field is required
   * @default false
   */
  required?: boolean
  /**
   * Additional class names
   */
  className?: string
}

/**
 * Form component for collecting user input
 */
export const Form = ({ children, onSubmit, layout = "vertical", className = "", ...props }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event)
  }

  const baseClassName = "form"
  const layoutClassName = `form--${layout}`

  const combinedClassNames = [baseClassName, layoutClassName, className].filter(Boolean).join(" ")

  return (
    <form className={combinedClassNames} onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  )
}

export const FormItem = ({ label, children, help, error, required = false, className = "" }: FormItemProps) => {
  const baseClassName = "form-item"
  const errorClassName = error ? "form-item--error" : ""

  const combinedClassNames = [baseClassName, errorClassName, className].filter(Boolean).join(" ")

  return (
    <div className={combinedClassNames}>
      {label && (
        <label className="form-item__label">
          {label}
          {required && <span className="form-item__required">*</span>}
        </label>
      )}
      <div className="form-item__control">{children}</div>
      {help && <div className="form-item__help">{help}</div>}
      {error && <div className="form-item__error">{error}</div>}
    </div>
  )
}

Form.Item = FormItem
export default Form

