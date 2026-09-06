import "./globals.css";
import "./reference-overrides.css";
import "./best-seller-overrides.css";
import "./reservation-overrides.css";
import { CartProvider } from "@/components/CartProvider"; import Navbar from "@/components/Navbar";
import LogoIntro from "@/components/LogoIntro";
export const metadata={title:"Saffron House — Indian Restaurant",description:"Authentic Indian cuisine and warm hospitality"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><CartProvider><LogoIntro/><Navbar/>{children}</CartProvider></body></html>}