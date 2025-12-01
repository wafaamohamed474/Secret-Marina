import { FaStar } from "react-icons/fa";

export default function Rating({ rating = 0 }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="flex items-center gap-2 py-3">
      {stars.map((filled, i) => (
        <FaStar
          key={i}
          className={`text-base ${
            filled ? "text-amber-200" : "text-gray-200"
          }`}
        />
      ))}

      <span className="text-(--primary) text-base">({rating})</span>
    </div>
  );
}
