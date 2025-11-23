 
interface MainTextProps {
  children: string;
}

export default function MainText({ children }: MainTextProps) {
  return (
    <p className="text-sm font-normal text-(--paragraph-text)">
      {children}
    </p>
  );
}
