export const formatTo12Hour = (time24 : string) => {
  const [hour, minute] = time24.split(":");
  let h = Number(hour);
  const suffix = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${minute} ${suffix}`;
};

export const convertTo24Hour = (timeString : string) => {
  const [time, period] = timeString.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
};

 
export const calcEndTime = (start24 : string, duration : number) => {
  let [h, m] = start24.split(":").map(Number);
  m += duration;
  h += Math.floor(m / 60);
  m = m % 60;
  h = h % 24;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
};
