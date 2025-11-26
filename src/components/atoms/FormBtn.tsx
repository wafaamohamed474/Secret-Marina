"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormButtonProps extends React.ComponentProps<typeof Button> {
  label: string;
  loading?: boolean;
}

export default function FormBtn({
  label,
  loading = false,
  disabled,
  className,
  ...props
}: FormButtonProps) {
  return (
    <Button
      type="submit"
      disabled={disabled || loading}
      className={cn(
        "bg-(--primary) py-2 px-14 w-full h-12",
        className 
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin mx-auto" />
      ) : (
        label
      )}
    </Button>
  );
}
