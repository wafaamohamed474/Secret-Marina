import { Button } from "@/components/ui/button";

export interface TimeSlot {
  start: string;
  duration: number;
  labelStart: string;
  labelEnd: string;
  labelFull: string;
}

interface TimeSlotButtonProps {
  slot: TimeSlot;
  isSelected: boolean;
  onSelect: (slot: TimeSlot) => void;
}
export default function TimeSlotBtn({
  slot,
  isSelected,
  onSelect,
}: TimeSlotButtonProps) {
  return (
    <Button
      onClick={() => onSelect(slot)}
      className={`
        shadow-[0_0_3px_#008AEF] text-sm
        ${isSelected ? "bg-(--primary) text-white" : "bg-white text-[#B5BEC6]"}
      `}
    >
      <p className="">{slot.labelFull}</p>
    </Button>
  );
}
