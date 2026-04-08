import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="w-full py-6 bg-brand-dark text-white flex items-center justify-center gap-4">
			<div className="flex items-center gap-2">
				<Image src="/images/logo.png" alt="Logo" width={40} height={40} />
				<span className={`text-lg font-bold font-inter transition-colors`}>DRI TEC</span>
			</div>
			<p className="text-text-muted">&copy; 2024 DRI TEC
                . Todos os direitos reservados.</p>
		</footer>
	);
}
