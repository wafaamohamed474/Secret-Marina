// "use client";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { cn } from "@/lib/utils";

// interface AuthInputProps {
//   label: string;
//   id: string;
//   type?: string;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onRightIconClick?: (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => void;

//   placeholder?: string;
//   iconLeft?: React.ReactNode;
//   iconRight?: React.ReactNode;
// }

// export default function AuthInput({
//   label,
//   id,
//   type = "text",
//   placeholder,
//   iconLeft,
//   iconRight,
//   value,
//   onChange,
//   onRightIconClick,
// }: AuthInputProps) {
//   return (
//     <div className="space-y-3">
//       <Label htmlFor={id} className="text-base font-medium text-(--text-black)">
//         {label}
//       </Label>

//       <div className="relative">
//         {iconLeft && (
//           <span
//             className={cn(
//               "absolute inset-y-0 flex items-center text-(--input-placeholder) px-3",
//               "left-0 "
//             )}
//           >
//             {iconLeft}
//           </span>
//         )}

//         <Input
//           id={id}
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className={cn(
//             "h-12 rounded-lg  placeholder-(--input-placeholder)  text-base  border-(--input-border) on focus:border-(--primary)",
//             iconLeft ? "pl-10" : "",
//             iconRight ? "pr-10" : ""
//           )}
//           style={{
//             outline: "none",
//             boxShadow: "none",
//           }}
//           onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 2px #008AEF")}
//           onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
//         />

//         {iconRight && (
//           <button
//             type="button"
//             onClick={onRightIconClick} // pass a function from parent to toggle password
//             className="absolute inset-y-0 right-0 flex items-center px-3 text-(--input-placeholder)"
//           >
//             {iconRight}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onRightIconClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, iconLeft, iconRight, onRightIconClick, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {/* Label */}
        <Label htmlFor={props.id} className="text-base font-medium text-(--text-black)">
          {label}
        </Label>

        <div className="relative">
          {/* Left Icon */}
          {iconLeft && (
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-(--input-placeholder)">
              {iconLeft}
            </span>
          )}

          {/* Input */}
          <Input
            {...props} // value, onChange, onBlur, name from react-hook-form
            ref={ref}  // important!
            className={cn(
              "h-12 w-full rounded-lg border-(--input-border) placeholder-(--input-placeholder) text-base",
              iconLeft ? "pl-10" : "px-3",
              iconRight ? "pr-10" : "",
              className
            )}
            style={{
              outline: "none",
              boxShadow: "none",
            }}
            onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 2px #008AEF")}
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />

          {/* Right Icon (toggle) */}
          {iconRight && (
            <button
              type="button"
              onClick={onRightIconClick}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-(--input-placeholder)"
            >
              {iconRight}
            </button>
          )}
        </div>
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
