import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iam Jeje developer web fullstack ",
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
      <body className={`${inter.className} m-0 p-0 box-border bg-white dark:bg-black text-currentColor dark:text-white `} >
        <div className=" box-border ">
          <div className=" h-[80px] Z-50">
            <Navigation />
          </div>
          <div className="max-w-screen-xl mx-auto px-4 ">
            {children}
          </div>
          <div className="">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
