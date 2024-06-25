import Header from "@/components/layout/Header";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Product",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <Header />
        {children}
      <Footer />
    </CartProvider>
  );
}
