import type { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
  title: "DRI TEC",
  description: "Empresa especializada em caça vazamentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
