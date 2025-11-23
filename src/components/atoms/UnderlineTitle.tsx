interface UnderlineTitleProps {
  children: string;
  textColor?: string;
  bgColor?: string;
}

export default function UnderlineTitle({
  children,
  textColor = "text-(--background)",  
  bgColor = "bg-(--background)", 
}: UnderlineTitleProps) {
  return (
    <div className="w-full flex justify-center md:justify-start">
      <h2 className={`inline-block text-xl font-bold relative pb-1 ${textColor}`}>
        {children}
        <span className={`block h-1 mt-1 w-full ${bgColor}`}></span>
      </h2>
    </div>
  );
}
