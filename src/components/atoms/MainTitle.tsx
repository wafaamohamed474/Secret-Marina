import { ReactNode } from "react";

 
interface MainTitleProps {
  children: string | ReactNode;
}

export default function MainTitle({ children }: MainTitleProps) {
  return (
    <h1 className="text-xl font-bold text-(--primary)  ">
      {children}
    </h1>
  );
}
