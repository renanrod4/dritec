import Link from 'next/link';

const menuItems = [
	{ label: 'Início', href: '/' },
	{ label: 'Serviços', href: '/' },
	{ label: 'Sobre', href: '/' },
	{ label: 'Contato', href: '/' },
];

export function NavItems() {
	return (
		<nav className="flex gap-6">
			{menuItems.map((item) => (
				<li key={item.label} className='flex items-center text-text-on-blue	hover:text-highlight-light-blue transition-colors'>
					<Link href={item.href}>{item.label}</Link>
				</li>
			))}
		</nav>
	);
}
