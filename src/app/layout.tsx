import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "hazley-ui/dist/style.css";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Query App Movies",
  description: "Aplication using React Query to get Movies from TMDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ width: "100%" }}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main style={{ width: "100%", height: "100vh" }}>{children}</main>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
