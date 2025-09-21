// import Header from "@/components/Header";
import { Bebas_Neue, Manjari,Anton} from "next/font/google";
import "./fonts.css";
import "./globals.css";
import "./mostHave.css";
import {base} from "../../axios";




export const metadata = {
 
  title:{
    default:  "coach demo - life & business coaching agency",
    template:"%s - bymemet"
  },
  description: "We help wedding videographers save time and scale their business with professional, cinematic video edits delivered fast, polished, and stress-free.",
  openGraph: {
title: "Coach Demo – Life & Business Coaching Agency",
description: "We help ambitious individuals and business owners unlock their potential, overcome challenges, and create lasting success through personalized life and business coaching."
,url:`${base}/`,
        images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1758464858/tek2k9hdhkvwyke8mo7o.png'}],
        // images: [{url: `open-graph/?slug=${slug}`}],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@bok_cheza",
        title: "Coach Demo – Life & Business Coaching Agency",
description: "We help ambitious individuals and business owners unlock their potential, overcome challenges, and create lasting success through personalized life and business coaching.",
 images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1758464858/tek2k9hdhkvwyke8mo7o.png',width:1200,height:630,alt:`image for curry entreprise`}],
      },
};



// Load fonts with next/font (recommended, no hydration issues)
const bebas = Anton({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const manjari = Manjari({ subsets: ["latin"], weight: ["100", "400", "700"], variable: "--font-manjari" });

export default function RootLayout({ children }) {
  return (
 <html lang="en" className="dark">
      <head />
      <body className={`${bebas.variable} ${manjari.variable}`}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
