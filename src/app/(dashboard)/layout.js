import { Hind_Siliguri } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../globals.css";

const siliguri = Hind_Siliguri({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
	title: "Design Skills BD",
	description: "",
};

export default function DashboardLayout({ children }) {
	return (
		<html lang="en">
			<body className={siliguri.className}>
				<ThemeProvider attribute="class">
					<div>Dashboard Header</div>
						{children}
					<div>Dashboard Footer</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
