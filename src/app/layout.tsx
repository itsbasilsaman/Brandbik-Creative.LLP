import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
// Load Poppins font with required weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // add the weights you need
  style: ['normal', 'italic'], // optional
  display: 'swap',             // best for SEO and performance
});

 
export const metadata: Metadata = {
  title: "BrandBik",
  description: "We build bold brands and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
