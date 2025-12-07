import BellWithBadge from "../atoms/BellWithBadge";
import { FaX } from "react-icons/fa6";
import alertNotificationImg from "@/assets/images/Group 18.png";
import Image from "next/image";
import {
  useDeleteSingleNotificationMutation,
  useGetNotificationsQuery,
  useReadSingleNotificationMutation,
} from "@/store/services/authApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <BellWithBadge count={data?.countUnreadNotifications} />
      </DialogTrigger>
      <DialogContent
        className="w-full max-w-md h-full sm:h-auto  md:max-w-2xl lg:max-w-3xl bg-(--background)  z-10000   flex flex-col py-10 px-0
           justify-center shadow-[0_0_2px_#008AEF]  border-0 lg:top-22
    lg:left-0
    xl:translate-x-1/4
    lg:translate-x-0
    lg:translate-y-0"
      >
        <div className="grid gap-8 ">
          <div className="space-y-5">
            <DialogHeader>
              <DialogTitle className="leading-none font-semibold text-base text-center text-(--primary)">
                Notification
              </DialogTitle>
            </DialogHeader>
          </div>
          <div className="h-full md:max-h-80  overflow-y-auto">
            {data?.notifications.map((notfiy: any) => (
              <div
                onClick={() => handleRead(notfiy.id)}
                key={notfiy.id}
                className={`flex items-center justify-between ${
                  isRead(notfiy) ? "bg-white" : "bg-(--card-bg)"
                } px-5 py-3 w-full border-b border-(--input-border) cursor-pointer gap-4`}
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
      </DialogContent>
    </Dialog>
  );
}
