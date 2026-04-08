'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Logo } from './Logo';
import { NavItems } from './NavItems';
import { WhatsappBtn } from '../WhatsappBtn';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isOnInitialSection, setIsOnInitialSection] = useState(true);

	const closeMenu = () => setIsMenuOpen(false);
	const toggleMenu = () => setIsMenuOpen(prev => !prev);

	useEffect(() => {
		const updateHeaderTextColor = () => {
			const referenceElement = document.getElementById('section-divider');

			if (!referenceElement) {
				setIsOnInitialSection(false);
				return;
			}
			const rect = referenceElement.getBoundingClientRect();
			console.log('Reference element bottom:', rect.bottom);
			const triggerOffset = 190;
			setIsOnInitialSection(rect.bottom > triggerOffset);
		};

		updateHeaderTextColor();
		window.addEventListener('scroll', updateHeaderTextColor, { passive: true });
		window.addEventListener('resize', updateHeaderTextColor);

		return () => {
			window.removeEventListener('scroll', updateHeaderTextColor);
			window.removeEventListener('resize', updateHeaderTextColor);
		};
	}, []);

	const desktopTextClass = isOnInitialSection ? 'text-text-on-blue' : 'text-brand-primary';
	const desktopBgClass = isOnInitialSection ? 'bg-white/2' : 'bg-brand-primary/10 ';
	const desktopHoverClass = isOnInitialSection ? 'hover:text-highlight-light-blue' : 'hover:text-brand-primary-hover';
	const mobileToggleTextClass = isOnInitialSection ? 'text-white' : 'text-brand-primary';

	return (
		<header className={`fixed top-0 inset-x-0 z-20 mt-4 mx-2 md:mx-[2%] backdrop-blur-xs rounded-xl shadow-lg ${desktopBgClass} transition-colors duration-300`}>
			<ul className="flex h-16 min-w-0 items-center gap-4 px-2 md:gap-8">
				<Logo textClassName={desktopTextClass} />

				<li className="hidden sm:flex items-center">
					<NavItems className="flex-row" itemClassName={`${desktopTextClass} ${desktopHoverClass}`} />
				</li>

				<li className="hidden sm:block shrink-0">
					<WhatsappBtn className='rounded-xl'/>
				</li>

				<li className="sm:hidden ml-auto">
					<button
						type="button"
						onClick={toggleMenu}
						aria-expanded={isMenuOpen}
						aria-label="Abrir menu de navegação"
						className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20 ${mobileToggleTextClass}`}
					>
						{isMenuOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
					</button>
				</li>
			</ul>

			<div
				className={`sm:hidden transition-all duration-200 ${
					isMenuOpen
						? 'pointer-events-auto opacity-100 translate-y-0'
						: 'pointer-events-none opacity-0 -translate-y-1'
				}`}
			>
				<div className="mt-2 fixed right-0 w-[60%] rounded-xl border border-border-gray-light bg-background-white p-4 shadow-xl">
					<NavItems
						onItemClick={closeMenu}
						className="flex-col items-center gap-3"
						itemClassName="text-text-primary text-xl hover:text-brand-primary"
					/>
					<div className="mt-3">
						<WhatsappBtn className="w-full justify-center my-0 rounded-lg" />
					</div>
				</div>
			</div>
		</header>
	);
}
