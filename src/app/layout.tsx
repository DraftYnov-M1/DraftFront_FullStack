import Header from "@/components/partials/Header";
import { Poppins } from "next/font/google";
import { WishlistContextProvider } from "@/context/WishlistContext";
import "@/assets/css/globals.scss";

// const syne = Syne({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Iprops {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Iprops>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <WishlistContextProvider>
          <Header />
          <main>{children}</main>
        </WishlistContextProvider>
      </body>
    </html>
  );
}
