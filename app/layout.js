// app/layout.js
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import './globals.css';
import { CartProvider } from './ui/CartProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <NavBar/>
          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}