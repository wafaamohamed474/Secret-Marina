import { HomeDataResponse } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (buider) => ({
    Login: buider.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    SignUp: buider.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    VerifyOtp: buider.mutation({
      query: (phone) => ({
        url: "/verify-code",
        method: "POST",
        body: { phone },
      }),
    }),
    GetAllHomeData: buider.query<HomeDataResponse, { lang?: string }>({
      query: ({ lang }) => ({
        url: `/HomeData?lang=${lang}`,
        method: "GET",
      }),
    }),

    GetFavorites: buider.query<any, { lang?: string }>({
      query: ({ lang }) => ({
        url: `/favorites?lang=${lang}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useVerifyOtpMutation,
  useGetAllHomeDataQuery,
  useGetFavoritesQuery,
} = authApi;
