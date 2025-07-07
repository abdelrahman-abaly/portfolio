import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Add the required weights
});

export const metadata = {
  title: "Abdulrahman Abaly",
  description: "Abdulrahman Abaly's Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Abdulrahman Abaly",
    description: "Abdulrahman Abaly's Portfolio",
    url: "https://portfolio-abdos-projects-9ab4571d.vercel.app/",
    siteName: "Abdulrahman Abaly",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-gray-100 text-gray-800`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
