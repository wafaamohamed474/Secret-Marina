import React from "react";
import { useDispatch } from "react-redux";
import {
  openActivity,
  openTrip,
} from "@/store/services/bookDialogSlice";
import { AppDispatch } from "@/store/store";
import FormBtn from "@/components/atoms/FormBtn";
import { ServiceItem } from "@/types/types";

interface BookingButtonProps {
  data: ServiceItem;
}

export const BookingButton: React.FC<BookingButtonProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleBook = () => {
    if (data?.category) {
      dispatch(openTrip(data));
      
    } else {
      dispatch(openActivity(data));
      
    }
  };

  return <FormBtn label="Book Now" className="w-fit" onClick={handleBook} />;
};
