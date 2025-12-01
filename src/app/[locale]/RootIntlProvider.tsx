// app/[locale]/RootIntlProvider.tsx
"use client";
import { ReactNode, use } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

type Props = { children: ReactNode; locale: string };

export default function RootIntlProvider({ children, locale }: Props) {
  let messages;
  try {
    messages = use(import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
