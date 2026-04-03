import './page.css';

import { Header } from '../components/header/Header';
import { InitialSection } from '../components/initial-section/InitialSection';

export default function Home() {
	return (
		<main className="w-full">
			<Header />
			<InitialSection />
		</main>
	);
}
