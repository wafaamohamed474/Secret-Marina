 
interface MainTitleProps {
  children: string;
}

export default function MainTitle({ children }: MainTitleProps) {
  return (
    <h1 className="text-xl font-bold text-(--primary)  ">
      {children}
    </h1>
  );
}
