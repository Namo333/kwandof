import type { Metadata } from "next";
import "./globals.css";
import Container from "../components/pages/Container";
import HeaderMenu from "../components/pages/HeaderMenu";
import FooterSection from "../components/pages/FooterSection";

import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Container>
          <HeaderMenu/>
        </Container>
        {children}
        <Toaster />
        <footer className="full-width">
          <FooterSection/>
        </footer>
      </body>
    </html>
  );
}
