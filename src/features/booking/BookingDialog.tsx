"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { closeDialog } from "@/store/services/bookDialogSlice";
import { RootState } from "@/store/store";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useDispatch, useSelector } from "react-redux";
import BookTrip from "./BookTrip";
import BookActivity from "./BookActivity";
import Payment from "./Payment";

export default function BookingDialog() {
  const dispatch = useDispatch();
  const { activeDialog} = useSelector(
    (state: RootState) => state.bookDialog
  );
  const renderScreen = () => {
    switch (activeDialog) {
      case "trip":
        return <BookTrip />;
      case "activity":
        return <BookActivity />;
      case "payment":
        return <Payment />;
      default:
        return <BookTrip />;
    }
  };
  const isActivity =
    activeDialog === "activity" ? "lg:max-w-3xl" : "lg:max-w-2xl";
  return (
    <Dialog open={!!activeDialog} onOpenChange={() => dispatch(closeDialog())}>
      <DialogContent
        className={`w-full max-w-md h-full sm:h-auto   md:max-w-2xl  ${isActivity} gap-0 flex items-center justify-center
          md:p-10 lg:p-15  xl:py-10 xl:px-15 bg-(--background) z-1000 rounded-3xl border-0`}
      >
        <DialogTitle>
          <VisuallyHidden></VisuallyHidden>
        </DialogTitle>
        {renderScreen()}
      </DialogContent>
    </Dialog>
  );
}
