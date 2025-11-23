import Link from "next/link";

interface FormLinkProps {
  label?: string;
  link?: string;
  path: string;
}

export default function FormLink({ label, link, path }: FormLinkProps) {
  return (
    <p className="font-semibold text-sm">
      <span className="text-(--form-link)">{label} </span>
      <Link href={path} className="text-(--primary)">
        {link}
      </Link>
    </p>
  );
}
