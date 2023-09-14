import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/decks/decks.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M.E.M.O.R.E",
  description: "Application for flashcards",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
