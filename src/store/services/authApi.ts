import { LoginSchema } from "@/lib/validations/loginSchema";
import { SignUpSchema } from "@/lib/validations/signUpSchema";
import { VerificationSchema } from "@/lib/validations/verificationSchema";
import {
  HomeDataResponse,
  LoginResponse,
  SignUpResponse,
  TripDetails,
  TripTypesDetails,
  VerifyOtpResponse,
} from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./checkAuth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,

    prepareHeaders: async (headers) => {
      const token = await getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    Login: builder.mutation<LoginResponse, LoginSchema & { lang?: string }>({
      query: ({ lang, ...body }) => ({
        url: "/login",
        method: "POST",
        body: { ...body, type: "user" },
        params: lang ? { lang } : undefined,
      }),
    }),

    SignUp: builder.mutation<SignUpResponse, SignUpSchema & { lang?: string }>({
      query: ({ lang, ...body }) => ({
        url: "/register",
        method: "POST",
        body: { ...body, type: "user" },
        params: lang ? { lang } : undefined,
      }),
    }),

    VerifyOtp: builder.mutation<
      VerifyOtpResponse,
      VerificationSchema & { lang?: string }
    >({
      query: ({ lang, ...payload }) => ({
        url: "/verify-code",
        method: "POST",
        body: payload,
        params: lang ? { lang } : undefined,
      }),
    }),

    ResendOtp: builder.mutation<
      VerifyOtpResponse,
      { phone: string; lang?: string }
    >({
      query: ({ lang, ...body }) => ({
        url: "/Resend-Otp",
        method: "POST",
        body,
        params: lang ? { lang } : undefined,
      }),
    }),

    GetAllHomeData: builder.query<HomeDataResponse, { lang?: string }>({
      query: ({ lang }) => ({
        url: `/HomeData?lang=${lang}`,
        method: "GET",
      }),
    }),

    GetFavorites: builder.query<any, { lang?: string }>({
      query: ({ lang }) => ({
        url: `/favorites?lang=${lang}`,
        method: "GET",
      }),
    }),

    GetTripById: builder.query<TripDetails, { id: string; lang?: string }>({
      query: ({ id, lang }) => ({
        url: `/services/${id}?lang=${lang}`,
        method: "GET",
      }),
    }),
    GetTripTypesById: builder.query<
      TripTypesDetails,
      { id: string; lang?: string }
    >({
      query: ({ id, lang }) => ({
        url: `/trips/${id}?lang=${lang}`,
        method: "GET",
      }),
    }),

    GetUserBooking: builder.query<any, { lang?: string; status?: string }>({
      query: ({ lang, status }) => ({
        url: `/user/bookings`,
        method: "GET",
        params: { lang, status },
      }),
    }),
    CancelUserBooking: builder.mutation<any, { lang?: string; id: string }>({
      query: ({ lang, id }) => ({
        url: `/bookings/${id}/cancel`,
        method: "PATCH",
        params: { lang },
      }),
    }),
    GetBookingById: builder.query<any, { id: string; lang?: string }>({
      query: ({ id, lang }) => ({
        url: `/bookings/${id}?lang=${lang}`,
        method: "GET",
      }),
    }),
    GetNotifications: builder.query<any, { lang?: string }>({
      query: ({ lang }) => ({
        url: `/notifications?lang=${lang}`,
        method: "GET",
      }),
    }),

    DeleteSingleNotification: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `/notifications/${id}/delete`,
        method: "DELETE",
      }),
    }),
    ReadSingleNotification: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `/notifications/${id}/read`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useGetAllHomeDataQuery,
  useGetFavoritesQuery,
  useGetTripByIdQuery,
  useGetTripTypesByIdQuery,
  useGetUserBookingQuery,
  useCancelUserBookingMutation,
  useGetBookingByIdQuery,
  useGetNotificationsQuery,
  useDeleteSingleNotificationMutation,
  useReadSingleNotificationMutation
} = authApi;
