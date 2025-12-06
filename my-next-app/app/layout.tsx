import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "./providers";

export const metadata: Metadata = {
  title: "Play Greenly",
  description: "Green technology, sustainability, and eco-friendly products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
