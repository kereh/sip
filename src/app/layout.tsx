import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster"

import Footer from "~/components/footer";
import ThemeProvider from "~/components/theme-provider";

export const metadata = {
  title: "SIP - Perpustakaan",
  description: "Sistem informasi perpustakaan berbasis web",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#09090b",
          colorText: "black",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className="relative flex h-screen flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <div className="flex-1">
              <TRPCReactProvider>
                {children}
              </TRPCReactProvider>
              < Toaster/>
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
