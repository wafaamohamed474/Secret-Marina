import { useEffect, useState } from "react";
import BookCalender from "./BookCalender";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { openPayment } from "@/store/services/bookDialogSlice";
import GuestSelector from "./GuestSelector";
import TimeSlots from "./TimeSlots";
import { RootState } from "@/store/store";
import AvailabilityTable from "./AvailabilityTable";
import { useCheckAvailabilityTripByIdMutation } from "@/store/services/authApi";
export default function BookActivity() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    undefined
  );

  const dispatch = useDispatch();
  const { paymentData } = useSelector((state: RootState) => state.bookDialog);
 
  const id = paymentData?.id;
  
  const [selectedStart, setSelectedStart] = useState<string | null>(null);
  const [selectedEnd, setSelectedEnd] = useState<string | null>(null);
  const [guests, setGuests] = useState({ adults: 1, children: 0 });
  const [checkAvailability, { data, isLoading, isError }] =
    useCheckAvailabilityTripByIdMutation();

  function formatDateForAPI(date?: Date) {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const formattedDate = formatDateForAPI(selectedDate);
  const isValid = Boolean(id && formattedDate && selectedStart && selectedEnd);


  useEffect(() => {
    if (id && formattedDate && selectedStart && selectedEnd) {
      checkAvailability({
        id,
        date: formattedDate,
        start_time: selectedStart,
        end_time: selectedEnd,
      });
    }
  }, [id, formattedDate, selectedStart, selectedEnd, checkAvailability]);



   const handleNext = () => {
    if (!isValid) return;  
    
    dispatch(
      openPayment({
        id,
        date: formattedDate,
        start_time: selectedStart,
        end_time: selectedEnd,
        isTrip: false,
        data : paymentData,
        adult_tickets: guests.adults,
        child_tickets: guests.children

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
   {selectedDate && <TimeSlots
          id={id}
          selectedDate={formattedDate}
          duration={Number(paymentData?.duration)}
          onSelect={(start, end) => {
            setSelectedStart(start);
            setSelectedEnd(end);
          }}
        />}
        
        <div className="flex flex-col md:flex-row   md:justify-between">
          <AvailabilityTable data={data} />
          <GuestSelector
          data={paymentData}
          onChange={(adults, children) => setGuests({ adults, children })}
        />
          <div className="flex md:flex-col justify-between items-center gap-2">
            <Button variant={"outline"}>
              Total {paymentData?.price_after_discount} SAR
            </Button>
            <Button className="px-12" onClick={handleNext} disabled={!isValid}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
