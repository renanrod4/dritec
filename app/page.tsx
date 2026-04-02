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
      <div className=" ">
        <WhatsappBtn text="Solicitar Orçamento" iconSize={25} className='py-4 text-lg font-semibold ' />
        
      </div>
        {/* <ScrollDownIndicator className="text-text-on-blue" /> */}
		</section>
	);
}
