 import { InputHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export default function PasswordInput({
  leftIcon,
  rightIcon,
  className,
  ...props
}: PasswordInputProps) {
  return (
    <div className="relative w-full">
      {/* Left Icon */}
      {leftIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-(--input-icon)">
          {leftIcon}
        </div>
      )}

      {/* Input */}
      <input
        {...props}
        className={cn(
          "h-12 w-full rounded-lg placeholder-(--input-placeholder) text-base border-(--input-border) focus:border-(--primary) focus:outline-none",
          leftIcon ? "pl-10" : "",
          rightIcon ? "pr-10" : "",
          className
        )}
        style={{
          outline: "none",
          boxShadow: "none",
        }}
        onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 2px #008AEF")}
        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      />

      {/* Right Icon */}
      {rightIcon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-(--input-icon)">
          {rightIcon}
        </div>
      )}
    </div>
  )
}
