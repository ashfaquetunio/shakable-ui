import type React from "react"
import "./styles.css"

export interface CardProps {
  /**
   * Card contents
   */
  children: React.ReactNode
  /**
   * Optional header content
   */
  header?: React.ReactNode
  /**
   * Optional footer content
   */
  footer?: React.ReactNode
  /**
   * Whether to add a hover effect
   * @default false
   */
  hoverable?: boolean
  /**
   * Whether to add a border
   * @default true
   */
  bordered?: boolean
  /**
   * Additional class names
   */
  className?: string
}

/**
 * Card component for displaying content in a contained manner
 */
export const Card = ({ children, header, footer, hoverable = false, bordered = true, className = "" }: CardProps) => {
  const baseClassName = "card"
  const hoverClassName = hoverable ? "card--hoverable" : ""
  const borderClassName = bordered ? "card--bordered" : ""

  const combinedClassNames = [baseClassName, hoverClassName, borderClassName, className].filter(Boolean).join(" ")

  return (
    <div className={combinedClassNames}>
      {header && <div className="card__header">{header}</div>}
      <div className="card__body">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  )
}

export default Card

