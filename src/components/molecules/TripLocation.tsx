interface TripMapProps {
  latitude: string | number;
  longitude: string | number;
  locationName?: string;
  height?: string;
}

export default function TripMap({
  latitude,
  longitude,
  locationName,
  height = "300px",
}: TripMapProps) {
  if (!latitude || !longitude) return null;

  const lat = Number(latitude);
  const lng = Number(longitude);

  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="w-full rounded-xl overflow-hidden border">
      {locationName && (
        <p className="p-2 font-semibold bg-gray-100 text-gray-800">
          {locationName}
        </p>
      )}
      <iframe
        title="Trip Location"
        width="100%"
        height={height}
        frameBorder="0"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
    </div>
  );
}
