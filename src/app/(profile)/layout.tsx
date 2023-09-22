import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ClientProvider from "../Provider";

export const metadata: Metadata = {
  title: "Plummy Chat",
  description: "Online chat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ClientProvider>
      {children}
      <Footer />
    </ClientProvider>
  );
}

