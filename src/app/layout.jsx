import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Improve Business",
  description: "Improve Business' webpage for consulting and academy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} text-ibsilver-600 flex flex-col min-h-screen overflow-x-hidden bg-ibsilver-100	`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
