
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMEKA CONSULT LTD - Strategic Business Consulting & Digital Transformation",
  description: "Expert business consulting services for digital transformation, process optimization, and strategic growth. Helping organizations achieve sustainable success across all industries.",
  keywords: "business consulting, digital transformation, strategic planning, process optimization, change management, business strategy, consulting services",
  authors: [{ name: "IMEKA CONSULT LTD Team" }],
  creator: "IMEKA CONSULT LTD",
  publisher: "IMEKA CONSULT LTD",
  openGraph: {
    title: "IMEKA CONSULT LTD - Strategic Business Consulting",
    description: "Expert business consulting services for digital transformation and strategic growth",
    url: "https://imekaconsult.com",
    siteName: "IMEKA CONSULT LTD",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMEKA CONSULT LTD - Strategic Business Consulting",
    description: "Expert business consulting services for digital transformation and strategic growth",
    creator: "@imekaconsult",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href="https://imekaconsult.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IMEKA CONSULT LTD",
              "url": "https://imekaconsult.com",
              "logo": "https://imekaconsult.com/logo.png",
              "description": "Expert business consulting services for digital transformation and strategic growth",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.facebook.com/imekaconsult",
                "https://www.twitter.com/imekaconsult",
                "https://www.linkedin.com/company/imekaconsult"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
        style={{fontFamily: 'Times New Roman, Times, serif'}}
      >
        {children}
      </body>
    </html>
  );
}
