import { ThemeProvider } from 'next-themes';
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
		<Header/>
		<Footer/>
	</ThemeProvider>
  );
}
