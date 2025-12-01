type TripServiceBtnProps = {
  label: string;
  Icon?: React.ElementType;
};

export default function TripServiceBtn({ label, Icon }: TripServiceBtnProps) {
  return (
    <div className="flex flex-col justify-center items-center py-1 px-5 rounded-xl   shadow-[0_0_2px_#008AEF] text-(--primary) text-sm font-semibold">
      {Icon && <Icon className="text-sm p-0" />}
      <span className="p-0">{label}</span>
    </div>
  );
}
