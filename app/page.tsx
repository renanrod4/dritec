import './page.css';

import { Header } from '../components/header/Header';
import Image from 'next/image';
import { WhatsappBtn } from '../components/WhatsappBtn';
import ScrollDownIndicator from '../components/ScrollDownIndicator/ScrollDownIndicator';

export default function Home() {
	return (
		<main className="w-full">
			<Header />
			<InitialSection />
		</main>
	);
}

function InitialSection() {
	return (
		<section className="h-screen flex flex-col items-center justify-center bg-linear-to-b from-brand-dark to-brand-primary text-white">
			<Image src="/images/logo.png" width={200} height={200} alt="logo" />
			<h1 className=" font-extrabold text-center text-[clamp(2rem,5vw,3.5rem)] w-[15ch] leading-[1.1] ">
				Caça Vazamentos
				<span className="text-highlight-light-blue"> de Água e Esgoto</span>
			</h1>
			<p className="text-center text-lg mt-4 text-highlight-pale-blue">
				Detecção precisa e não destrutiva de vazamentos em encanamentos de água e esgoto.
			</p>
			<div className="flex gap-4 w-full mt-5 items-center justify-center max-w-[30%]">
				<WhatsappBtn text="Solicitar Orçamento" iconSize={25} className="py-4 text-lg font-semibold flex-1 " />
				<SecondaryButton />
			</div>
			<ScrollDownIndicator className="opacity-40 fixed bottom-2" />
		</section>
	);
}

function SecondaryButton() {
	return (
		<button
			type="button"
			className="px-5 py-4 max-w-[40%] flex-1 my-2 border-2 border-border-gray-light/40 text-text-on-blue rounded-full bg-transparent hover:text-text-on-blue hover:border-border-gray-light transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
		>
			Nossos Serviços
		</button>
	);
}
