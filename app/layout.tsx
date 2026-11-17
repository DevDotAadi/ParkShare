import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ParkShare – Share space. Park easy.",
  description:
    "Book a nearby driveway, basement or office lot in minutes, or earn from the space you're not using.",
  openGraph: {
    title: "ParkShare – Share space. Park easy.",
    description:
      "Book a nearby driveway, basement or office lot in minutes, or earn from the space you're not using.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%232864E8'/%3E%3Ctext x='16' y='23' font-family='Arial' font-weight='800' font-size='20' text-anchor='middle' fill='white'%3EP%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-ink bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
