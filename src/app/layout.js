"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme.js";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "black",
        }}
        suppressHydrationWarning
      >
        <ChakraProvider theme={theme}>
          <Box>
            <Header />
            <Box px={{ base: 0, md: 0 }} py={{ base: 0, md: 0 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
