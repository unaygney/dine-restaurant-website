import { mainFont } from "@/lib/font";
import "./globals.css";

export const metadata = {
  title: "Dine Restaurant Website",
  description: "A restaurant website..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
