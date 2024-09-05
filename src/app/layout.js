import { Hind_Siliguri } from "next/font/google";
import "./globals.css";


const siliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Design Skills BD",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={siliguri.className}>{children}</body>
    </html>
  );
}
