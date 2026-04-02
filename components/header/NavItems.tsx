import Link from 'next/link';

const menuItems = [
	{ label: 'Início', href: '/' },
	{ label: 'Serviços', href: '/' },
	{ label: 'Sobre', href: '/' },
	{ label: 'Contato', href: '/' },
];

export function NavItems() {
	return (
		<>
			{menuItems.map((item) => (
				<li key={item.label} className='flex items-center text-text-on-blue	'>
					<Link href={item.href}>{item.label}</Link>
				</li>
			))}
		</>
	);
}
