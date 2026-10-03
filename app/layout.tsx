import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benja Glecer — Full Stack Developer",
  description:
    "Portfolio personal de Benja Glecer. Proyectos web, software, IA y tecnología.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}