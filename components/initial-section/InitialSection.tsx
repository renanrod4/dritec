import Image from 'next/image';
import ScrollDownIndicator from '../ScrollDownIndicator/ScrollDownIndicator';
import { InitialSectionActions } from './InitialSectionActions';
import { InitialSectionDescription } from './InitialSectionDescription';
import { InitialSectionTitle } from './InitialSectionTitle';

export function InitialSection() {
	return (
		<section className="h-screen flex flex-col items-center justify-center bg-linear-to-b from-brand-dark to-brand-primary text-white">
			<Image src="/images/logo.png" width={200} height={200} alt="logo" />
			<InitialSectionTitle />
			<InitialSectionDescription />
			<InitialSectionActions />
			<ScrollDownIndicator className="opacity-40 fixed bottom-2" />
		</section>
	);
}
