import './page.css';

import { Header } from '../components/header/Header';
import { InitialSection } from '../components/initial-section/InitialSection';
import HighlightsSection from '@/components/highlights-section/page';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="relative isolate w-full">
			<Header />
			<InitialSection />
			<SectionDivider />
			<HighlightsSection />
		</main>
	);
}

function SectionDivider() {
	return (
		<div className="relative -z-10 w-full -translate-y-[40%] pointer-events-none min-w-175 overflow-hidden">
			<Image src="/images/sectionDivider.png" width={1920} height={30} alt="divider" className="w-full h-auto" />
		</div>
	);
}