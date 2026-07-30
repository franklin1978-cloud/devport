import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "DevPort - Portal de empleos tech",
  description: "Encuentra empleos y proyectos tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-salte-950 text white hover">{children}</body>
    </html>
  );
}
