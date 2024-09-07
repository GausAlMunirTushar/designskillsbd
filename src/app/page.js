import { ThemeProvider } from 'next-themes';
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from 'next/image';
import Hero from '@/components/home/Hero';
import Course from '@/components/courses/Course';
import Notice from '@/components/common/Notice';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
		<Notice/>
		<Header/>
		<Hero/>
		<Course/>
		<Footer/>
	</ThemeProvider>
  );
}
