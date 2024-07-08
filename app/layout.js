import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DUMB Cat",
  description:
    "DUMB Cat is the dumbest cat of all time. So don't try to mess with this cat and if you love dumb cats store some in your lockers and shut the f*ck up.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
