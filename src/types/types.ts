// export interface LoginRequest {
//   email: string;
//   password: string;
// }

// export interface LoginResponse {
//   token: string;
//   user: {
//     id: number;
//     name: string;
//     email: string;
//     phone?: string;
//   };
// }

// export interface SignUpRequest {
//   name: string;
//   email: string;
//   password: string;
// }

// export interface SignUpResponse {
//   id: number;
//   name: string;
//   email: string;
// }

// export interface VerifyOtpRequest {
//   phone: string;
// }

// export interface VerifyOtpResponse {
//   success: boolean;
//   message: string;
// }

// Home

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

// ===========================
// Recommended Services
// ===========================
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

// Activity Category
// ===========================
export interface ActivityCategory {
  id: number;
  title: string;
}

// ===========================
// Activity Trip
// ===========================
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

// ===========================
// Destination
// ===========================
export interface Destination {
  id: number;
  title: string;
}

// ===========================
// Top Discount Service
// ===========================
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
