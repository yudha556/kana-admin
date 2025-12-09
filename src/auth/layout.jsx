import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function AuthLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased flex flex-row items-center overflow-hidden`}>
                {children}
            </body>
        </html>
    )
}