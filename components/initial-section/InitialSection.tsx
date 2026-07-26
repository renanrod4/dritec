import Image from 'next/image';
import ScrollDownIndicator from '../ScrollDownIndicator/ScrollDownIndicator';
import { InitialSectionActions } from './InitialSectionActions';
import { InitialSectionDescription } from './InitialSectionDescription';
import { InitialSectionTitle } from './InitialSectionTitle';
import { AnimatedBubbleParticles } from '@/components/lightswind/animated-bubble-particles';
import type { HomeCopyVariant } from '@/lib/seo';

interface InitialSectionProps {
	copyVariant: HomeCopyVariant;
}

export function InitialSection({ copyVariant }: InitialSectionProps) {
	return (
		<section
			id="initial-section"
			className="relative z-0 h-screen flex flex-col items-center justify-center bg-linear-to-b from-brand-dark to-brand-primary text-text-on-blue overflow-visible"
		>
			{/* Partículas animadas de bolhas */}
			<AnimatedBubbleParticles
				backgroundColor="transparent"
				particleColor="#93c5fd"
				enableGooEffect={true}
				particleSize={15}
				scaleRange={{ min: 0.5, max: 3 }}
				spawnInterval={150}
				width="100%"
				height="calc(100% + 6rem)"
				blurStrength={5}
				zIndex={0}
				className="absolute inset-x-0 top-0 w-full z-0 opacity-10 pointer-events-none mask-[linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]"
			/>
			<div className="w-full flex flex-col items-center justify-center text-center px-4 z-10">
				<Image src="/images/logo.png" width={200} height={200} alt="logo" />
				<InitialSectionTitle mainText={copyVariant.heroTitle} highlightText={copyVariant.heroTitleHighlight} />
				<InitialSectionDescription text={copyVariant.heroDescription} />
				<InitialSectionActions priorityMessage={copyVariant.priorityMessage} />
			</div>
			<ScrollDownIndicator visibleWhileSelector="#initial-section" className="fixed bottom-2 z-10" />
		</section>
	);
}
