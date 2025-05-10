import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

import Header from "@/components/CommonComponents/Header";
import PageTransition from "@/components/CommonComponents/PageTransition";
import PageTransitionEffect from "@/components/CommonComponents/PageTransitionEffect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Menath Nadungoda",
  description: "Menath Nadungoda's Personal Website.",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={metadata.icon} />
      </Head>
      <body className={poppins.variable}>
        <Header />
        <PageTransitionEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
