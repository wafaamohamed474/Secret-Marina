export interface LoginResponse {
  data: {
    token: string;
    user: User;
  };
}
export interface SignUpResponse {
  data: {
    token: string;
    user: User;
  };
}

export interface VerifyOtpResponse {
  data: {
    token: string;
    user: VerifiedUser;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  is_verified: boolean;
  type: "user" | "supervisor";
  image: string | null;
  license_photo: string | null;
  additional_documents: string | null;
  phone_verified_at: string | null;
  fcm: string;
  device_id: string | null;
}

export interface VerifiedUser {
  id: number;
  name: string;
  image: string | null;
  email: string;
  phone: string;
  is_verified: boolean;
  type: "user" | "supervisor";
  login_type: string;
  phone_verified_at: string | null;
  otp: string | null;
  otp_expires_at: string | null;
  country_id: number | null;
  city_id: number | null;
  fcm: string | null;
  device_id: string | null;
  license_photo: string | null;
  additional_documents: string | null;
  created_at: string;
  updated_at: string;
}
export interface trip_types {
  id: number;
  title: string;
  image: string;
}

export interface categories {
  id: number;
  title: string;
  image: string;
}

export interface banners {
  id: number;
  title: string;
  image: string;
}

export interface service_image {
  id: number;
  path: string;
}

export interface service_trip {
  id: number;
  title: string;
}

export interface recommended_service {
  id: number;
  title: string;
  price: string; // sometimes APIs return numbers as string
  price_before_discount: number;
  price_after_discount: number;
  discount_percentage: number;
  average_rating: string; // or number if API returns numeric
  location: string;
  duration: string; // "60" minutes
  have_a_ticket: 0 | 1;
  number_of_tickets: number | null;
  child_free: 0 | 1;
  description: string;
  details: string | null;
  guest_capacity: number;
  is_favorited: boolean;
  images: service_image[];
  category: string | null;
  trip: service_trip;
  destination: string | null;
}

export interface destinations {
  id: number;
  title: string;
  image: string;
}

export interface ActivityCategory {
  id: number;
  title: string;
}
export interface ActivityTrip {
  id: number;
  title: string;
}

export interface ActivityYouDontMiss {
  id: number;
  title: string;
  price: string;
  price_before_discount: number;
  price_after_discount: number;
  discount_percentage: number;
  average_rating: string;
  location: string;
  duration: string;
  have_a_ticket: 0 | 1;
  number_of_tickets: number | null;
  child_free: 0 | 1;
  description: string;
  details: string | null;
  guest_capacity: number;
  is_favorited: boolean;
  images: service_image[]; // reuse from recommended_services
  category: ActivityCategory | null;
  trip: ActivityTrip;
  destination: string | null;
}

export interface Destination {
  id: number;
  title: string;
}

export interface TopDiscountService {
  id: number;
  title: string;
  price: string;
  price_before_discount: number;
  price_after_discount: number;
  discount_percentage: number;
  average_rating: string;
  location: string;
  duration: string;
  have_a_ticket: 0 | 1;
  number_of_tickets: number | null;
  child_free: 0 | 1;
  description: string;
  details: string | null;
  guest_capacity: number;
  is_favorited: boolean;
  images: service_image[]; // reuse from recommended_services
  category: ActivityCategory | null; // same type as activities
  trip: ActivityTrip; // reuse
  destination: Destination | null;
}
export interface TripDetails {
  data: {
    id: number;
    title: string;
    price: string;
    price_before_discount: number;
    price_after_discount: number;
    discount_percentage: number;
    average_rating: string;
    my_rating: number | null;
    booking_stats: BookingStats;
    location: string;
    longitude: string;
    latitude: string;
    guest_capacity: number;
    duration: string;
    lounges: number;
    bedrooms: number;
    toilets: number;
    captain: string;
    details: string | null;
    description: string;
    have_a_ticket: number;
    number_of_tickets: number | null;
    child_free: number;
    images: service_image[];
    service_owner: ServiceOwner;
    category: ActivityCategory;
    trip: ActivityTrip;
    destination: Destination;
    facilities: Facility[];
    time_slots: TimeSlot[];
    created_at: string;
    updated_at: string;
    is_favorited: boolean;
  };
}
export interface BookingStats {
  completed_count: number;
  cancelled_count: number;
}
export interface ServiceOwner {
  id: number;
  name: string;
  phone: string;
  email: string;
  type: string;
}
export interface Facility {
  id: number;
  title: string;
}

export interface TimeSlot {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  service_id: number;
  number_of_tickets: number | null;
}

export interface ServiceItem {
  id: number;
  title: string;
  price: string;
  price_before_discount: number;
  price_after_discount: number;
  discount_percentage: number;
  average_rating: string;
  my_rating?: number | null;
  booking_stats?: BookingStats;
  location: string;
  longitude?: string;
  latitude?: string;
  guest_capacity?: number | null;
  duration: string;
  lounges?: number | null;
  bedrooms?: number | null;
  toilets?: number | null;
  captain?: string | null;
  details?: string | null;
  description: string;
  have_a_ticket: number | 0 | 1;
  number_of_tickets?: number | null;
  child_free: number | 0 | 1;
  images: service_image[];
  service_owner?: ServiceOwner;
  category?: ActivityCategory | string | null;
  trip?: ActivityTrip | trip_types;
  destination?: Destination | string | null;
  facilities?: Facility[];
  time_slots?: TimeSlot[];
  created_at?: string;
  updated_at?: string;
  is_favorited?: boolean;
}
export interface TripTypeCategory {
  id: number;
  title: string;
  services: ServiceItem[];
}
export interface TripTypesDetails {
  data: {
    id: number;
    title: string;
    categories: TripTypeCategory[];
    services_without_category: ServiceItem[];
  };
}
export interface HomeDataResponse {
  data: {
    trip_types: trip_types[];
    categories: categories[];
    banners: banners[];
    recommended_services: recommended_service[];
    destinations: destinations[];
    activities_you_dont_miss: ActivityYouDontMiss[];
    top_discount_services: TopDiscountService[];
  };
}
