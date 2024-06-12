import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

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
          <AuthProvider>
            <main className="flex-grow">{children}</main>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
