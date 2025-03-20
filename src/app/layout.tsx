import "./global.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Positivus - Digital Marketing Agency",
  description: "Digital marketing agency helping businesses grow online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
