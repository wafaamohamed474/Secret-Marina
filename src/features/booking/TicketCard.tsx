import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

interface TicketProps {
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  total: string;
  guests: number;
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
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }
  return (
    <div className="w-full max-w-md mx-auto">
      {" "}
      <div className="relative w-full max-w-md mx-auto bg-white rounded-4xl shadow-md overflow-hidden border border-gray-200">
        {/* Top Section */}
        <div className="px-8 py-5 flex justify-between">
          <div>
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="text-sm font-medium text-(--paragraph-text)">
              {type}
            </p>
          </div>
          <div className="">
            <div className="flex flex-col">
              <span className="text-xs font-semibold">
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
        <div className="px-8 py-5 flex justify-between items-center text-sm">
          <p className="text-(--primary) text-sm font-semibold">
            Total {total} SAR
          </p>
          <p className="font-semibold text-sm ">
            {guests} Guest{guests > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <a className="text-(--primary) flex font-semibold text-xs gap-2 items-center justify-end pt-3">
        <MdOutlineFileDownload className="text-lg" /> Download ticket
      </a>
    </div>
  );
}

 