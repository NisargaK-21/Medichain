import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[80vh] p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
