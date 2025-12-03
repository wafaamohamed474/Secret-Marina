import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import BellWithBadge from "../atoms/BellWithBadge";
import { FaX } from "react-icons/fa6";
import alertNotificationImg from "@/assets/images/Group 18.png";
import Image from "next/image";
import {
  useDeleteSingleNotificationMutation,
  useGetNotificationsQuery,
  useReadSingleNotificationMutation,
} from "@/store/services/authApi";

export function NotificationMenu() {
  const { data, refetch } = useGetNotificationsQuery({});
  const [deleteNotification] = useDeleteSingleNotificationMutation();
  const [readNotification] = useReadSingleNotificationMutation();

  const handleDelete = async (id: string) => {
    await deleteNotification({ id });
    refetch();
  };
  const handleRead = async (id: string) => {
    await readNotification({ id });
    refetch();
  };

  const isRead = (notify: any) => !!notify?.read_at;
  console.log("notifications", data);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <BellWithBadge count={data?.countUnreadNotifications} />
      </PopoverTrigger>
      <PopoverContent
        className="bg-white z-9999 mt-5 border py-10 px-0 w-screen md:w-[80vw] lg:w-[60vw] "
        align="end"
        sideOffset={10}
        side="bottom"
      >
        <div className="grid gap-8 ">
          <div className="space-y-5">
            <h2 className="leading-none font-semibold text-base text-center text-(--primary)">
              Notification
            </h2>
          </div>
          <div className="max-h-100  overflow-y-auto">
            {data?.notifications.map((notfiy: any) => (
              <div
                onClick={() => handleRead(notfiy.id)}
                key={notfiy.id}
                className={`flex items-center justify-between ${
                  isRead(notfiy) ? "bg-white" : "bg-(--card-bg)"
                } px-5 py-3 w-full border-b border-(--input-border) cursor-pointer`}
              >
                <div className="flex items-center justify-between gap-2 md:gap-4">
                  <div>
                    <Image
                      src={alertNotificationImg}
                      alt="alert notification img"
                      className="w-10 md:w-14 h-10 md:h-14"
                    />
                  </div>
                  <p className="text-xs md:text-sm font-normal text-[#00002B]">
                    {notfiy?.data?.message_ar}
                  </p>
                </div>
                <button
                  className="cursor-pointer"
                  onClick={() => handleDelete(notfiy.id)}
                >
                  <FaX className="text-(--primary) text-xs md:text-sm " />
                </button>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
