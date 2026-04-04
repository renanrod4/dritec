'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import scrollDownAnimation from '@/public/animations/scrolldown.json';

interface ScrollDownIndicatorProps {
	size?: number;
	className?: string;
	visibleWhileSelector?: string;
}

export default function ScrollDownIndicator({
	size = 40,
	className = '',
	visibleWhileSelector = '#initial-section',
}: ScrollDownIndicatorProps) {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const target = document.querySelector(visibleWhileSelector);
		if (!target) return;

		const updateVisibility = () => {
			const rect = target.getBoundingClientRect();
			const cutoff = 100;
			setIsVisible(rect.bottom > window.innerHeight - cutoff);
		};

		updateVisibility();
		window.addEventListener('scroll', updateVisibility, { passive: true });
		window.addEventListener('resize', updateVisibility);

		return () => {
			window.removeEventListener('scroll', updateVisibility);
			window.removeEventListener('resize', updateVisibility);
		};
	}, [visibleWhileSelector]);

	return (
		<div
			className={`${className} pointer-events-none transition-opacity duration-300 ${
				isVisible ? 'opacity-40' : 'opacity-0'
			}`}
			style={{ width: size * 2, height: size * 2 }}
			aria-hidden={!isVisible}
		>
			<Lottie animationData={scrollDownAnimation} loop />
		</div>
	);
}
