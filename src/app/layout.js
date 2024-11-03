import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Devember'24 - Newsletter",
  description: "Challenge n°1 for Devember'24 : Newsletter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-screen flex justify-center items-start`}
      >
        {children}
      </body>
    </html>
  );
}
