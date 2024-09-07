import { ThemeProvider } from 'next-themes';
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from 'next/image';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
		<Header/>
		<div>
			<Image src="/banner.jpg" alt="Hero Image" width={2000} height={300} className="w-full h-auto" />
		</div>
		<Footer/>
	</ThemeProvider>
  );
}
