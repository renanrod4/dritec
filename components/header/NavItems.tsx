import Link from 'next/link';

const menuItems = [
	{ label: 'Início', href: '/' },
	{ label: 'Serviços', href: '/' },
	{ label: 'Sobre', href: '/' },
	{ label: 'Contato', href: '/' },
];

interface NavItemsProps {
	className?: string;
	itemClassName?: string;
	onItemClick?: () => void;
}

export function NavItems({ className = '', itemClassName = '', onItemClick }: NavItemsProps) {
	return (
		<nav className={`flex items-center gap-6 ${className}`}>
			{menuItems.map((item) => (
				<li key={item.label} className={`flex items-center transition-colors ${itemClassName}`}>
					<Link href={item.href} onClick={onItemClick}>
						{item.label}
					</Link>
				</li>
			))}
		</nav>
	);
}
