import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Library Center | คลังผลงานเว็บไซต์",
  description: "แกลเลอรีรวมเว็บไซต์ที่เผยแพร่ พร้อมภาพตัวอย่างและลิงก์เข้าชม",
};

export const viewport: Viewport = {
  themeColor: "#f6f3ed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
