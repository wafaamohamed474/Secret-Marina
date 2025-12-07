import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { openPayment } from "@/store/services/bookDialogSlice";
import { RootState } from "@/store/store";
import TimeSlots from "./TimeSlots";
import BookCalender from "./BookCalender";

export default function BookTrip() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    undefined
  );
  const [selectedStart, setSelectedStart] = useState<string | null>(null);
  const [selectedEnd, setSelectedEnd] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { paymentData } = useSelector((state: RootState) => state.bookDialog);

  const id = paymentData?.id;
  function formatDateForAPI(date?: Date) {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const formattedDate = formatDateForAPI(selectedDate);
 const isValid = Boolean(id && formattedDate && selectedStart && selectedEnd);

 const handleNext = () => {
  if (!isValid) return;  
  
  dispatch(
    openPayment({
      id,
      date: formattedDate,
      start_time: selectedStart,
      end_time: selectedEnd,
      isTrip: true,
      data : paymentData
    })
  );
};


  return (
    <div className="w-full">
      <div className="md:px-10">
        <BookCalender
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </div>
      <div className="pt-5">
        <h2 className="text-base font-semibold text-(--primary)">Start Time</h2>
        {selectedDate &&  <TimeSlots
          id={id}
          selectedDate={formattedDate}
          duration={Number(paymentData?.duration)}
          onSelect={(start, end) => {
            setSelectedStart(start);
            setSelectedEnd(end);
          }}
        />}
       
        <div className="flex justify-between items-center">
          <Button variant={"outline"}>
            Total {paymentData?.price_after_discount} SAR
          </Button>
          <Button className="px-12" onClick={handleNext} disabled={!isValid}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
