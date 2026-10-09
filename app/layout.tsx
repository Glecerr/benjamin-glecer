import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://portfolio-benjamin-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Benjamín Glecer | Desarrollador Full Stack",
    template: "%s | Benjamín Glecer",
  },

  description:
    "Portfolio de Benjamín Glecer, desarrollador Full Stack. Conocé mis proyectos web.",

  applicationName: "Portfolio de Benjamín Glecer",

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Benjamín Glecer",
    title: "Benjamín Glecer | Desarrollador Full Stack",
    description:
      "Conocé mis proyectos de desarrollo web.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Benjamín Glecer | Desarrollador Full Stack",
    description:
      "Portfolio profesional con proyectos web.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}