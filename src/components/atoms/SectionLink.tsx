 
import { FaArrowRight } from "react-icons/fa";

export default function SectionLink({ path }: { path?: string }) {
  return (
    <div className=" font-semibold flex items-center justify-end gap-2 text-base text-(--primary)">
      See All
      <FaArrowRight />
    </div>
  );
}
