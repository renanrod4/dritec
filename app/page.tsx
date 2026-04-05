import './page.css';

import { Header } from '../components/header/Header';
import { InitialSection } from '../components/initial-section/InitialSection';
import HighlightsSection from '@/components/highlights-section/HighlightSection';
import SectionDivider from '@/components/section-divider/SectionDivider';
import ServicesSection from '@/components/services-section/ServicesSection';

export default function Home() {
	return (
		<main className=" w-full overflow-x-clip">
			<Header />
			<InitialSection />
			<SectionDivider />
			<HighlightsSection />
			<ServicesSection />
		</main>
	);
}
