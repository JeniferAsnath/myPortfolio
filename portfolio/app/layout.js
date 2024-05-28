import { Inter, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weights: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weights: ["400", "700"] });

export const metadata = {
  title: "iam Jeje developer web fullstack",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${inter.className} font-montserrat text-base m-0 p-0 box-border bg-white dark:bg-black text-currentColor dark:text-fuchsia-100`}
      >
        <div className="box-border">
          <div className="h-[80px] max-w-screen-lg mx-auto z-50">
            <Navigation />
          </div>
          <div className="max-w-screen-xl mx-auto px-4">
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
