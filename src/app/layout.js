'use client'; // Required for using React hooks on client-side

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  // State for the loading screen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000); // Simulated loading delay
    return () => clearTimeout(timeout); // Cleanup
  }, []);

  return (
    <html lang="en">
      <body>
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
        {isLoading ? (
          <div style={styles.loadingScreen}>
            <img
              src="/assets/logo_gdg.png" // GDG Logo
              alt="Loading..."
              style={styles.loadingLogo}
              className="spin-animation" // Added class for animation
            />
            <h1 style={styles.loadingText}>Loading GDG Site...</h1>
          </div>
        ) : (
          <>
            {children}
          </>
        )}
        </div>
        </body>
        </html>
  );
}

// Styles for loading screen and navigation
const styles = {
  loadingScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#171717",
  },
  loadingLogo: {
    width: "150px",
    height: "150px",
  },
  loadingText: {
    color: "#fff",
    fontSize: "2rem",
    marginTop: "1rem",
  },
  logoContainer: {
    flex: "0 1 auto",
  },
  logo: {
    width: "300px",
    height: "auto",
  },
  linksContainer: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "flex-end",
    gap: "2rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.8rem",
  },
};
