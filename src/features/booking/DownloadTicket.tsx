// export const DownloadTicketCard = () => {
//   return `   <h1 className="text-red-500">Ticket Download Successfully</h1>         
//             `;
// };

import { useRef } from "react";
import * as htmlToImage from "html-to-image";
import { Button } from "@/components/ui/button";

export const DownloadTicketCard = () => {
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
    <div>
      {/* Your ticket UI */}
      <div ref={cardRef} className="p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-red-500">Ticket Download Successfully</h1>
        <p className="text-gray-700">This is a test ticket.</p>
      </div>

      <Button
        className="text-(--primary) flex font-semibold text-xs gap-2 items-center justify-end pt-3"
        onClick={downloadAsImage}
      >
          Download ticket
      </Button>
    </div>
  );
};
