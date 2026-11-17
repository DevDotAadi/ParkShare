import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#10294B",
};

export const metadata: Metadata = {
  // TODO: Replace with real production domain before launch
  metadataBase: new URL("https://parkshare.example"),
  title: {
    default: "ParkShare – Book or share a parking space",
    template: "%s | ParkShare",
  },
  description:
    "Book a nearby driveway, basement or office lot in minutes, or earn from the parking space you're not using.",
  openGraph: {
    type: "website",
    siteName: "ParkShare",
    title: "ParkShare – Book or share a parking space",
    description:
      "Book a nearby driveway, basement or office lot in minutes, or earn from the parking space you're not using.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ParkShare – Book or share a parking space",
    description:
      "Book a nearby driveway, basement or office lot in minutes, or earn from the parking space you're not using.",
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
