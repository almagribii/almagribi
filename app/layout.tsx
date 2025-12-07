import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Merriweather } from "next/font/google";

export const metadata: Metadata = {
  title: "Brucad Al Magribi",
  description: "Fullstack Developer",
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
