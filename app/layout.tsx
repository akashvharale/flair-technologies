import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flair Technologies",
  description:
    "Flair Technologies is a leading provider of innovative technology solutions, specializing in AI-driven applications and advanced software development.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+919749749596" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.37.01 12c0 2.12.55 4.19 1.61 6.02L0 24l6.27-1.64a11.97 11.97 0 005.73 1.46h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.43a9.52 9.52 0 01-4.89-1.33l-.35-.2-3.72.97.99-3.63-.23-.38A9.48 9.48 0 012.57 12c0-5.22 4.24-9.46 9.46-9.46 2.53 0 4.92.99 6.71 2.79A9.42 9.42 0 0121.43 12c0 5.22-4.24 9.43-9.43 9.43zm5.07-7.1c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.63.14s-.73.91-.9 1.1c-.17.18-.33.21-.61.07a7.7 7.7 0 01-2.27-1.41 8.52 8.52 0 01-1.59-1.98c-.17-.3-.02-.46.13-.6.14-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.51s-.63-1.51-.86-2.07c-.23-.56-.46-.49-.63-.5h-.54c-.18 0-.46.07-.7.33s-.92.9-.92 2.2.95 2.54 1.08 2.72c.13.17 1.88 2.88 4.57 4.04.64.28 1.14.44 1.53.57.64.2 1.23.17 1.69.1.52-.08 1.66-.68 1.89-1.34.23-.66.23-1.23.16-1.34-.07-.12-.26-.18-.54-.32z" />
            </svg>
          </div>
        </a>
      </body>
    </html>
  );
}
