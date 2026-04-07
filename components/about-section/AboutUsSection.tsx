import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";
import { WhatsappBtn } from '../WhatsappBtn';

const listItems = [
	'Equipe treinada e certificada',
	'Equipamentos de última geração',
	'Métodos não destrutivos',
	'Atendimento rápido e eficiente',
	'Visita gratuita até 100km',
	'Orçamento somente após análise no local',
];

export default function AboutUsSection() {
	return (
		<section className="bg-background-white flex flex-col md:flex-row items-center justify-center px-4 py-16 gap-12">
			<div className="max-w-xl">
				<h2 className="uppercase font-semibold text-sm text-brand-primary mb-4">Sobre Nós</h2>
				<h1 className="text-3xl font-bold mb-6">Por que escolher a DRI TEC</h1>
				<p className="text-text-muted">
					A Dri Tec é especializada em caça vazamentos em encanamentos de água e esgoto, atuando em São Paulo
					e região metropolitana. Nosso compromisso é oferecer um serviço rápido, preciso e com o menor
					impacto possível ao seu imóvel.
				</p>
				<ul className="flex flex-col lg:flex-wrap lg:max-h-38 mt-6 mr-3 gap-x-8">
                    {listItems.map((item, index) => (
                        <li key={index} className="flex items-start mt-4 text-wrap max-w-[30ch]">
                            {/* green check logo */}
                            <FaCheckCircle size={20} className="text-green-500 mt-1 mr-2 shrink-0" />
                            <span className="text-text-secondary font-light text-sm text-wrap"
                            >{item}</span>
                        </li>
                    ))}
                </ul>
                <WhatsappBtn className="bg-brand-primary hover:bg-brand-primary-hover mt-10 py-2" text='Fale Conosco'/>
			</div>
			<div className='relative'>
                <div className="absolute bottom-0 left-0 -translate-x-4 translate-y-4 flex flex-col items-center gap-2 text-center mt-4 bg-brand-primary text-white rounded-2xl p-2 py-6">
                    <h1 className='text-2xl font-bold'>2h</h1>
                    <span className='text-sm max-w-[10ch]'>
                    Tempo de chegada</span>
                </div>
				<Image
					src="/images/mockImage.png"
					alt="Sobre nós"
					width={600}
					height={400}
					className="rounded-4xl mt-8 h-85 object-cover"
				/>
			</div>
		</section>
	);
}
