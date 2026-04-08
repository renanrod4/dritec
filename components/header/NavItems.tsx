import Link from 'next/link';

const menuItems = [
	{ label: 'Início', href: '/#highlights-section' },
	{ label: 'Serviços', href: '/#services-section' },
	{ label: 'Sobre', href: '/#about-section' },
	{ label: 'Contato', href: '/#contact-section' },
];

interface NavItemsProps {
	className?: string;
	itemClassName?: string;
	onItemClick?: () => void;
}

export function NavItems({ className = '', itemClassName = '', onItemClick }: NavItemsProps) {
	return (
		<nav>
			<ul className={`flex items-center gap-6 ${className}`}>
				{menuItems.map(item => (
					<li key={item.label} className={`flex items-center transition-colors ${itemClassName}`}>
						<Link href={item.href} onClick={onItemClick}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
