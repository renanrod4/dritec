import { FaWhatsapp } from 'react-icons/fa';

interface WhatsappBtnProps {
	text?: string;
	className?: string;
	iconSize?: number;
}

export function WhatsappBtn({ text = 'Orçamento', className = '', iconSize = 20 }: WhatsappBtnProps) {
	return (
		<button
			type="button"
			aria-label="Solicitar orçamento no WhatsApp"
			className={`bg-whatsapp text-nowrap hover:bg-whatsapp-hover cursor-pointer text-white px-5 py-2 my-2 rounded-full text-center flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp ${className}`}
		>
			<FaWhatsapp size={iconSize} className="inline-block text-5xl" />
			{text}
		</button>
	);
}
