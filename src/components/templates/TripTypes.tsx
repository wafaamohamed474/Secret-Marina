import { useGetTripTypesByIdQuery } from "@/store/services/authApi";
import { usePathname } from "next/navigation";
import TripTypeDetails from "@/features/trip-types/TripTypeDetails";

export default function TripTypesTemplate({
  tripTypeId,
}: {
  tripTypeId: string;
}) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  if (!tripTypeId) return;
  const { data, isLoading, error } = useGetTripTypesByIdQuery({
    id: tripTypeId,
    lang: currentLocale,
  });

  return <TripTypeDetails tripTypes={data} />;
}
