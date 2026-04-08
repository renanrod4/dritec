'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';

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
			onClick={() => {
				const phoneNumber = '5511973243498';
				const message = encodeURIComponent('Olá, gostaria de solicitar um orçamento.');
				const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
				window.open(whatsappUrl, '_blank');
			}}
			suppressHydrationWarning
			className={cn(
				'w-full sm:w-auto whitespace-nowrap cursor-pointer rounded-full bg-whatsapp px-5 py-3 text-white',
				'flex items-center justify-center gap-2 transition-all duration-200 shadow-sm',
				'hover:bg-whatsapp-hover hover:shadow-lg hover:scale-105',
				'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp',
				className,
			)}
		>
			<FaWhatsapp size={iconSize} className="inline-block" />
			{text}
		</button>
	);
}
