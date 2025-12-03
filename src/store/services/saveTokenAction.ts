"use server";
import { cookies } from "next/headers";

export async function saveTokenAction(token: string) {
  const cookieStore = await cookies(); 
  

  cookieStore.set({
    name: "auth_token",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return "Token saved successfully!";
}
