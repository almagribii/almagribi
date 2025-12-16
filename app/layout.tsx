import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Merriweather } from "next/font/google";

export const metadata: Metadata = {
  title: "Brucad Al Magribi | Fullstack Developer & Next.js Expert",
  description:
    "Explore the portfolio of Brucad Al Magribi, a skilled Fullstack Developer specializing in modern web technologies like Next.js, React, and serverless architectures.",
  metadataBase: new URL("https://www.almagribi.my.id"),

  openGraph: {
    title: "Brucad Al Magribi, Fullstack Developer",
    description: "Specializing in Next.js, React, and modern web development.",
    url: "https://www.almagribi.my.id", 
    siteName: "Brucad Al Magribi Portfolio",
    images: [
      {
        url: "/brucad.jpeg", 
        width: 1200,
        height: 630,
        alt: "Brucad Al Magribi - Fullstack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },



  icons: {
    icon: "/brucad.jpeg", 
    apple: "/apple-touch-icon.png", 
  },

  keywords: [
    "Fullstack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
};

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
