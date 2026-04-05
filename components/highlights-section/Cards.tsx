import { FaLocationDot } from 'react-icons/fa6';
import { FaClock, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { Card } from './Card';

export function Cards() {
	return (
		<div className="flex flex-wrap gap-6 justify-center items-center min-h-[50dvh]">
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
