import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";

interface TicketProps {
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  total: string;
  guests: number;
}
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
export default function TicketCard({
  title,
  type,
  date,
  time,
  location,
  total,
  guests,
}: TicketProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadAsImage = async () => {
    if (!cardRef.current) return;

    const dataUrl = await htmlToImage.toPng(cardRef.current, {
      cacheBust: true,
      pixelRatio: 2, // HD quality
    });

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "ticket.png";
    link.click();
  };
  return (
    <div className="w-full max-w-md mx-auto">
      {" "}
      <div
        ref={cardRef}
        className="relative w-full max-w-md mx-auto bg-white rounded-4xl shadow-md overflow-hidden border border-gray-200"
      >
        {/* Top Section */}
        <div className="px-8 py-3 flex justify-between">
          <div>
            <h2 className="text-xs md:text-base font-semibold">{title}</h2>
            <p className="text-xs md:text-sm font-medium text-(--paragraph-text)">
              {type}
            </p>
          </div>
          <div className="">
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold">
                {date ? formatDate(date) : ""}
              </span>
              <span className="text-[10px] font-medium text-(--paragraph-text)">
                {time}
              </span>
              <span className="text-[10px] font-medium text-(--paragraph-text) flex items-center gap-1">
                <FaLocationDot />
                {location}
              </span>
            </div>
          </div>
        </div>

        {/* Dashed Line */}
        <div className="relative">
          <div className="border-t border-dashed border-black mx-4"></div>
          {/* Circles on sides */}
          <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white border border-gray-300   rounded-full overflow-hidden"></div>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full"></div>
        </div>

        {/* Bottom Section */}
        <div className="px-8 py-3 flex justify-between items-center text-sm">
          <p className="text-(--primary) text-xs md:text-sm font-semibold">
            Total {total} SAR
          </p>
          {guests && (
            <p className="font-semibold text-xs md:text-sm ">
              {guests} Guest{guests > 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>
      <span
        className="text-(--primary) flex font-semibold text-xs gap-2 items-center justify-end pt-3 cursor-pointer"
        onClick={downloadAsImage}
      >
        <MdOutlineFileDownload className="text-lg" /> Download ticket
      </span>
    </div>
  );
}
