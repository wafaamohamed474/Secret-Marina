import { FaBook, FaRegCalendarCheck, FaUsers } from "react-icons/fa";

export default function AvailabilityTable(data: any) {
  console.log("avial table", data?.data?.data);
  const values = data?.data?.data;
  return (
    <>
    
        <table className="w-full md:w-fit text-center rounded-xl overflow-hidden">
          <thead>
            <tr className="">
              <th className="bg-(--primary) text-white py-2 text-[10px] font-semibold px-5">
                <span className="flex flex-col justify-center items-center gap-1">
                  <FaUsers /> Total Capacity
                </span>
              </th>
              <th className="bg-(--primary) text-white py-2 text-[10px] font-semibold px-5">
                <span className="flex flex-col justify-center items-center gap-1">
                  <FaBook /> Booked
                </span>
              </th>
              <th className="bg-(--primary) text-white py-2 text-[10px] font-semibold px-5">
                <span className="flex flex-col justify-center items-center gap-1">
                  <FaRegCalendarCheck /> Available
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-(--card-bg) text-(--primary) py-2 text-base font-semibold px-5">
                {values?.total_capacity}
              </td>
              <td className="bg-(--card-bg) text-(--primary) py-2 text-base font-semibold px-5">
                {values?.booked_tickets}
              </td>
              <td className="bg-(--card-bg) text-(--primary) py-2 text-base font-semibold px-5">
                {values?.remaining_tickets}
              </td>
            </tr>
          </tbody>
        </table>
      
    </>
  );
}
