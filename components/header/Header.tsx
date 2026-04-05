"use client";

import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Logo } from './Logo';
import { NavItems } from './NavItems';
import { WhatsappBtn } from '../WhatsappBtn';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);
	const toggleMenu = () => setIsMenuOpen(prev => !prev);

	return (
		<header className="fixed top-0 inset-x-0 z-20 mt-4 mx-2 md:mx-[2%] bg-white/2 backdrop-blur-xs rounded-xl shadow-lg">
			<ul className="flex h-16 min-w-0 items-center gap-4 px-2 md:gap-8">
				<Logo />

				<li className="hidden sm:flex items-center">
					<NavItems
						className="flex-row"
						itemClassName="text-text-on-blue hover:text-highlight-light-blue"
					/>
				</li>

				<li className="hidden sm:block shrink-0">
					<WhatsappBtn />
				</li>

				<li className="sm:hidden ml-auto">
					<button
						type="button"
						onClick={toggleMenu}
						aria-expanded={isMenuOpen}
						aria-label="Abrir menu de navegação"
						className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
					>
						{isMenuOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
					</button>
				</li>
			</ul>

			<div
				className={`sm:hidden transition-all duration-200 ${
					isMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-1'
				}`}
			>
				<div className="mt-2 fixed right-0 w-[60%] rounded-xl border border-border-gray-light bg-background-white p-4 shadow-xl">
					<NavItems
						onItemClick={closeMenu}
						className="flex-col items-center gap-3"
						itemClassName="text-text-primary text-xl hover:text-brand-primary"
					/>
					<div className="mt-3">
						<WhatsappBtn className="w-full justify-center my-0" />
					</div>
				</div>
			</div>
		</header>
	);
}
