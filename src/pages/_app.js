import "@/styles/globals.css";
import { Toaster } from "sonner";
import { Urbanist, Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const urbanist = Urbanist({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className={`${urbanist.variable} ${roboto.variable}`}>
        <Toaster position="bottom-right" richColors />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
