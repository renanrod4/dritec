import Image from 'next/image';
import ScrollDownIndicator from '../ScrollDownIndicator/ScrollDownIndicator';
import { InitialSectionActions } from './InitialSectionActions';
import { InitialSectionDescription } from './InitialSectionDescription';
import { InitialSectionTitle } from './InitialSectionTitle';
import { AnimatedBubbleParticles } from '@/components/lightswind/animated-bubble-particles';

export function InitialSection() {
	return (
		<section className="relative h-screen flex flex-col items-center justify-center bg-linear-to-b from-brand-dark to-brand-primary text-white overflow-hidden">
			{/* Partículas animadas de bolhas */}
			<AnimatedBubbleParticles
				backgroundColor="transparent"
				particleColor="#93c5fd"
				enableGooEffect={true}
				particleSize={15}
				scaleRange={{ min: 0.5, max:3 }}
				spawnInterval={150}
				width="100%"
				height="100%"
				blurStrength={5}
				zIndex={0}
				className="absolute inset-0 w-full h-full z-0 opacity-20"
			/>
			<div className='w-full flex flex-col items-center justify-center text-center px-4 z-10'>
			<Image src="/images/logo.png" width={200} height={200} alt="logo" />
			<InitialSectionTitle />
			<InitialSectionDescription />
			<InitialSectionActions />
			</div>
			<ScrollDownIndicator className="opacity-40 fixed bottom-2 z-10" />
		</section>
	);
}
