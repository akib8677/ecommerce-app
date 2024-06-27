import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Ecommerce",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <CartProvider>
            <AuthProvider>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </AuthProvider>
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
