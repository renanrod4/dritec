import './page.css';

import { Header } from '../components/header/Header';
import { InitialSection } from '../components/initial-section/InitialSection';
import HighlightsSection from '@/components/highlights-section/page';

export default function Home() {
	return (
		<main className="w-full">
			<Header />
			<InitialSection />
			<HighlightsSection />
		</main>
	);
}
