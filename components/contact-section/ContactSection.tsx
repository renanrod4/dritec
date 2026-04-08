import { WhatsappBtn } from '../WhatsappBtn';
import { FaLocationDot } from 'react-icons/fa6';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';

export default function ContactSection() {
	return (
		<section className="bg-linear-to-b from-brand-dark to-brand-primary text-text-on-blue flex flex-col items-center justify-center py-10 sm:py-20">
			<ContactHeader />
			<ContactCards />
			<WhatsappBtn text="Chamar no WhatsApp" className=" text-base sm:text-xl gap-3 md:px-10 w-[90%]" iconSize={30} />
		</section>
	);
}

function ContactHeader() {
	return (
		<div className="text-center py-12 flex flex-col items-center">
			<h2 className="uppercase font-semibold text-sm text-highlight-light-blue mb-2">Contato</h2>
			<h1 className="text-3xl font-bold mb-4">Precisa de ajuda com vazamentos?</h1>
			<p className="text-highlight-pale-blue max-w-[60ch]">
				Entre em contato agora mesmo pelo WhatsApp. Atendemos São Paulo e região com agilidade e
				profissionalismo.
			</p>
		</div>
	);
}

function ContactCards() {
	return (
		<div className="flex flex-col md:flex-row items-center sm:items-start justify-center gap-6 md:space-y-6 mb-6 ">
			<ContactCard icon={<FaLocationDot size={24} />} title="Localização" text="São Paulo e proximidades" />
			<ContactCard icon={<FaClock size={24} />} title="Atendimento" text="Segunda a segunda, 24 horas por dia" />
			<ContactCard icon={<FaPhoneAlt size={24} />} title="Telefone" text="(11) 97324-3498" />
		</div>
	);
}

interface ContactCardProps {
	icon: React.ReactNode;
	title: string;
	text: string;
}

function ContactCard({ icon, title, text }: ContactCardProps) {
	return (
		<div className="flex flex-1 flex-col justify-center items-center bg-highlight-light-blue/20
         border border-border-blue-medium/20! rounded-2xl px-20 py-3 w-[90%] md:w-full h-32 min-w-60 ">
			<div className="mb-4 text-highlight-light-blue">{icon}</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-center text-highlight-light-blue text-nowrap">{text}</p>
		</div>
	);
}
