import { Logo } from './Logo';
import { NavItems } from './NavItems';
import { WhatsappBtn } from '../WhatsappBtn';

export function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 flex h-16 mt-4 mx-2 md:mx-[2%]">
			<ul className="flex w-full h-full gap-8 px-2 items-center">
				<Logo />
				<NavItems />
				<li><WhatsappBtn /></li>
			</ul>
		</header>
	);
}
