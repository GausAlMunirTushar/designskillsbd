import { Hind_Siliguri } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer"
import Notice from "@/components/common/Notice";

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
			<body className={siliguri.className}>
				<ThemeProvider attribute="class">
					<Notice/>
					<Header />
					{children}
					<Footer/>
				</ThemeProvider>
			</body>
		</html>
	);
}
