import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Vandan Rangani | Portfolio & Projects",
  description:
    "Welcome to the official portfolio of Vandan Rangani – MERN Stack Developer, Tech Enthusiast, and Entrepreneur. Explore projects, skills, and get in touch!",
  keywords: [
    "Vandan Rangani",
    "Portfolio",
    "MERN Stack Developer",
    "Web Developer",
    "React Developer",
    "Full Stack Developer",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Projects",
  ],
  authors: [{ name: "Vandan Rangani", url: "https://vandansportfolio-rangani-vandans-projects.vercel.app" }],
  creator: "Vandan Rangani",
  publisher: "Vandan Rangani",
  openGraph: {
    title: "Vandan Rangani | MERN Stack Developer Portfolio",
    description:
      "Explore the portfolio of Vandan Rangani – a passionate developer and creator. See my latest projects, experience, and skills.",
    url: "https://vandansportfolio-rangani-vandans-projects.vercel.app",
    siteName: "Vandan Rangani Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dizxwrdv8/image/upload/v1745223017/logo_1_nlz0y5.webp",
        width: 1200,
        height: 630,
        alt: "Vandan Rangani Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vandan Rangani | Full Stack Developer Portfolio",
    description:
      "Check out Vandan Rangani’s portfolio - React, Node, MongoDB and more!",
    creator: "@ranganivandan",
    images: ["https://res.cloudinary.com/dizxwrdv8/image/upload/v1745223017/logo_1_nlz0y5.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="canonical"
          href="https://vandansportfolio-rangani-vandans-projects.vercel.app"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dizxwrdv8/image/upload/v1745223017/logo_1_nlz0y5.webp"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Vandan Rangani",
              url: "https://vandansportfolio-rangani-vandans-projects.vercel.app",
              sameAs: [
                "https://x.com/ranganivandan",
                "https://github.com/ranganivandan",
                "https://linkedin.com/in/vandanrangani",
              ],
              jobTitle: "Full Stack Developer",
              image:
                "https://res.cloudinary.com/dizxwrdv8/image/upload/v1745223017/logo_1_nlz0y5.webp",
              worksFor: {
                "@type": "Organization",
                name: "Self-Employed",
              },
            }),
          }}
        />
      </Head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
