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
			className={`w-full sm:w-auto whitespace-nowrap cursor-pointer rounded-full bg-whatsapp px-5 py-3 text-white
				flex items-center justify-center gap-2 transition-all duration-200 shadow-sm
				hover:bg-whatsapp-hover hover:shadow-lg hover:scale-105 
				focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp ${className}`}
		>
			<FaWhatsapp size={iconSize} className="inline-block" />
			{text}
		</button>
	);
}
