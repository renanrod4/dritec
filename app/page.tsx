import './page.css';

import { Header } from '../components/header/Header';
import { InitialSection } from '../components/initial-section/InitialSection';
import HighlightsSection from '@/components/highlights-section/HighlightSection';
import Image from 'next/image';

export default function Home() {
	return (
		<main className=" w-full overflow-x-clip">
			<Header />
			<InitialSection />
			<SectionDivider />
			<HighlightsSection />
		</main>
	);
}

function SectionDivider() {
	return (
		<div className="relative -z-10 w-full -mt-30 md:-mt-30 pointer-events-none overflow-hidden">
			<Image
				src="/images/sectionDivider.png"
				width={1920}
				height={30}
				alt="divider"
				className="block w-full h-auto"
			/>
		</div>
	);
}
