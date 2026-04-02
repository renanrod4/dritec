import { FaWhatsapp } from 'react-icons/fa';

export function WhatsappBtn() {
	return (
		<li>
			<button
				type="button"
				aria-label="Solicitar orçamento no WhatsApp"
				className="bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-2 my-2 rounded-3xl text-center flex items-center gap-2 transition-colors"
			>
				<FaWhatsapp size={18} className="inline-block" />
				Orçamento
			</button>
		</li>
	);
}
