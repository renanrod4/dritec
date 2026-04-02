import { FaWhatsapp } from 'react-icons/fa';

interface WhatsappBtnProps {
	text?: string;
	className?: string;
	iconSize?: number;
}

export function WhatsappBtn({ text = 'Orçamento', className = '', iconSize=20 }: WhatsappBtnProps) {
	return (
		<button
			type="button"
			aria-label="Solicitar orçamento no WhatsApp"
			className={`bg-whatsapp hover:bg-whatsapp-hover cursor-pointer text-white px-5 py-2 my-2 rounded-full text-center flex items-center gap-2 transition-colors ${className}`}
		>
			<FaWhatsapp size={iconSize} className="inline-block text-5xl" />
			{text}
		</button>
	);
}
