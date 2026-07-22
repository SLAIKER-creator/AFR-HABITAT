import "./globals.css";
import { config } from "../config";

export const metadata = {
  title: config.seo.title,
  description: config.seo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
