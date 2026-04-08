import AboutUsSection from '@/components/about-section/AboutUsSection';
import { Header } from '../components/header/Header';
import { InitialSection } from '../components/initial-section/InitialSection';
import HighlightsSection from '@/components/highlights-section/HighlightSection';
import SectionDivider from '@/components/section-divider/SectionDivider';
import ServicesSection from '@/components/services-section/ServicesSection';
import ContactSection from '@/components/contact-section/ContactSection';
import AboutContactWaveDivider from '@/components/section-divider/AboutContactWaveDivider';
import Footer from '@/components/footer/Footer';

export default function Home() {
	return (
		<main className=" w-full overflow-x-clip">
			<Header />
			<InitialSection />
			<SectionDivider />
			<HighlightsSection />
			<ServicesSection />
			<AboutUsSection />
			<AboutContactWaveDivider />
			<ContactSection />
			<Footer/>
		</main>
	);
}
