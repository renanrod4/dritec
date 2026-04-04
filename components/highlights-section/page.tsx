import { FaLocationDot } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

export default function HighlightsSection() {
	return (
		<section className="py-16 px-4 md:px-16 bg-background-white">
			<Cards />
		</section>
	);
}

function Cards() {
	return (
		<div className="flex flex-wrap gap-6 justify-center">
			<Card
				icon={FaLocationDot}
				title="São Paulo e Região"
				description="Atendemos toda a região metropolitana de São Paulo com rapidez e eficiência."
			/>
			<Card icon={FaClock} title="2h de Chegada" description="Chegamos ao local em até 2 horas após o contato" />
			<Card
				icon={FaTruck}
				title="Visita Gratuita"
				description="Realizamos uma visita técnica gratuita para avaliar o problema e fornecer um orçamento preciso."
			/>
			<Card
				icon={FaShieldAlt}
				title="Análise Profissional"
				description="Preço justo definido somente após análise no local"
			/>
		</div>
	);
}

function Card({ icon, title, description }: { icon?: IconType; title?: string; description?: string }) {
	const Icon = icon;
	return (
		<div
			className="flex flex-col items-center max-w-sm p-5 bg-card-blue-tint border-2 border-border-blue-light rounded-2xl 
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
