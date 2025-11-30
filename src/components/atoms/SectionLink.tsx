import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface SectionLinkProps {
  path?: string;
  label?: string;
  color?: string; // <-- added
}

export default function SectionLink({
  path,
  label = "See All",
  color = "text-(--primary)",  
}: SectionLinkProps) {
  if (!path) return null;

  return (
    <div className="flex justify-end">
      <Link
        href={path}
        className={`gap-2 text-base flex items-center font-semibold ${color}`}
      >
        {label} <FaArrowRight />
      </Link>
    </div>
  );
}
