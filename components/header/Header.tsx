import { Logo } from './Logo';
import { NavItems } from './NavItems';
import { WhatsappBtn } from './WhatsappBtn';

export function Header() {
	return (
		<nav className="fixed top-0 left-0 right-0 flex h-16 mx-4 md:mx-[12%]">
			<ul className="flex w-full h-full gap-3 px-2 items-center">
				<Logo />
				<NavItems />
				<WhatsappBtn />
			</ul>
		</nav>
	);
}
