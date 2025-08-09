import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta property="og:image" content="https://www.nxldigital.com/social-share.jpg" />
      </head>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
