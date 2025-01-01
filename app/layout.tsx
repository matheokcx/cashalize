import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cashalize",
  description: "Votre interface pour pouvoir visualiser l'evolution de vos depenses ainsi que leurs repartitions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
