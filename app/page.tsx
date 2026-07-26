import AboutUsSection from '@/components/about-section/AboutUsSection';
import type { Metadata } from 'next';
import { Header } from '../components/header/Header';
import { InitialSection } from '../components/initial-section/InitialSection';
import HighlightsSection from '@/components/highlights-section/HighlightSection';
import SectionDivider from '@/components/section-divider/SectionDivider';
import ServicesSection from '@/components/services-section/ServicesSection';
import ContactSection from '@/components/contact-section/ContactSection';
import AboutContactWaveDivider from '@/components/section-divider/AboutContactWaveDivider';
import Footer from '@/components/footer/Footer';
import { resolveHomeCopyVariant } from '@/lib/seo';

type HomePageProps = {
	searchParams?: Promise<{
		local?: string | string[];
	}>;
};

function normalizeLocalParam(localValue?: string | string[]): string | undefined {
	if (!localValue) {
		return undefined;
	}

	return Array.isArray(localValue) ? localValue[0] : localValue;
}

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
	const resolvedSearchParams = await searchParams;
	const localParam = normalizeLocalParam(resolvedSearchParams?.local);
	const copyVariant = resolveHomeCopyVariant(localParam);

	return {
		title: copyVariant.metadataTitle,
		description: copyVariant.metadataDescription,
		openGraph: {
			title: `DRI TEC | ${copyVariant.metadataTitle}`,
			description: copyVariant.metadataDescription,
		},
		twitter: {
			title: `DRI TEC | ${copyVariant.metadataTitle}`,
			description: copyVariant.metadataDescription,
		},
	};
}

export default async function Home({ searchParams }: HomePageProps) {
	const resolvedSearchParams = await searchParams;
	const localParam = normalizeLocalParam(resolvedSearchParams?.local);
	const copyVariant = resolveHomeCopyVariant(localParam);

	return (
		<main className=" w-full overflow-x-clip">
			<Header />
			<InitialSection copyVariant={copyVariant} />
			<SectionDivider />
			<HighlightsSection />
			<ServicesSection />
			<AboutUsSection />
			<AboutContactWaveDivider />
			<ContactSection />
			<Footer />
		</main>
	);
}
