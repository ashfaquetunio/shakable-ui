"use client"

import type React from "react"
import { useEffect, useState } from "react"
import "./styles.css"

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean
  /**
   * Function to close the modal
   */
  onClose: () => void
  /**
   * Modal title
   */
  title?: React.ReactNode
  /**
   * Modal content
   */
  children: React.ReactNode
  /**
   * Modal footer
   */
  footer?: React.ReactNode
  /**
   * Width of the modal
   * @default '500px'
   */
  width?: string
  /**
   * Whether to close when clicking the overlay
   * @default true
   */
  closeOnOverlayClick?: boolean
  /**
   * Additional class names
   */
  className?: string
}

/**
 * Modal component for displaying content that requires user interaction
 */
export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  width = "500px",
  closeOnOverlayClick = true,
  className = "",
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = ""
      return () => clearTimeout(timer)
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isVisible && !isOpen) {
    return null
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose()
    }
  }

  const baseClassName = "modal-overlay"
  const visibilityClassName = isOpen ? "modal-overlay--visible" : "modal-overlay--hidden"

  const combinedClassNames = [baseClassName, visibilityClassName].filter(Boolean).join(" ")

  const modalClassName = ["modal", className].filter(Boolean).join(" ")

  return (
    <div className={combinedClassNames} onClick={handleOverlayClick}>
      <div className={modalClassName} style={{ width }}>
        {title && (
          <div className="modal__header">
            <div className="modal__title">{title}</div>
            <button className="modal__close" onClick={onClose} aria-label="Close">
              ×
            </button>
          </div>
        )}
        <div className="modal__body">{children}</div>
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  )
}

export default Modal

