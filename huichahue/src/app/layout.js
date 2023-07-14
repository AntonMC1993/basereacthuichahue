import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export const metadata = {
  title: "Cervezas Huichahue",
  description: "Cervezas artesanales, Cervezas Huichahue, Cervezas ,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
