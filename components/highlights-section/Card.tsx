import { IconType } from 'react-icons';

interface CardProps {
	icon?: IconType;
	title?: string;
	description?: string;
}

export function Card({ icon, title, description }: CardProps) {
	const Icon = icon;

	return (
		<div
			className="flex flex-col items-center justify-center max-w-sm min-w-xs h-70 p-5 bg-card-blue-tint border-2 border-border-blue-light rounded-2xl
			 shadow-md text-center flex-1 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
		>
			<div className="flex items-center gap-4 p-5 bg-brand-primary rounded-2xl shadow-md">
				{Icon ? (
					<Icon className="fill-text-on-blue" size={40} />
				) : (
					<div className="w-12 h-12 bg-gray-300 rounded-full" />
				)}
			</div>
			<h3 className="text-lg font-semibold mt-4">{title || 'Título do destaque'}</h3>
			<p className="text-gray-600 mt-2">
				{description || 'Descrição do destaque para explicar o benefício ou característica.'}
			</p>
		</div>
	);
}
