import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./globals.scss";

const steppe = localFont({ src: "./steppe.woff" });

export const metadata: Metadata = {
    title: "Ravnovesie",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={steppe.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
