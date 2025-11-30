import { AuthScreen, goTo } from "@/store/services/authDialogSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface FormLinkProps {
  label?: string;
  link?: string;
  path?: AuthScreen;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export default function FormLink({
  label,
  link,
  path,
  onClick,
  className,
}: FormLinkProps) {
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
    if (path) {
      e.preventDefault();
      dispatch(goTo(path));
    }
  };
  return (
    <p className="font-semibold text-sm">
      {label && <span className="text-(--form-link)">{label} </span>}
      <span
        onClick={handleClick}
        className={`text-(--primary) cursor-pointer ${className || ""}`}
      >
        {link}
      </span>
    </p>
  );
}
