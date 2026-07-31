import type { Metadata } from 'next';
import './layout.css';
import { Inter } from 'next/font/google';
import { localBusinessJsonLd } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://dri.tec.br/'),
	title: {
		default: 'DRI TEC | Caça Vazamentos em São Paulo',
		template: '%s | DRI TEC',
	},
	description:
		'DRI TEC é uma empresa especialista em caça vazamentos em São Paulo, com atendimento técnico, preciso e rápido para residências, condomínios e empresas.',
	keywords: [
		'dritec',
		'dri.tec.br',
		'dri.tec',
		'dri tec',
		'caça vazamentos',
		'caça vazamentos são paulo',
		'detecção de vazamentos',
		'vazamento de água',
		'empresa de caça vazamentos',
		'caça vazamentos residencial',
		'caça vazamentos comercial',
		'caça vazamentos para condomínios',
	],
	applicationName: 'DRI TEC',
	creator: 'Adriano Gonçalves Rodrigues',
	publisher: 'DRI TEC',
	category: 'business',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: '/',
		siteName: 'DRI TEC',
		title: 'DRI TEC | Caça Vazamentos em São Paulo',
		description:
			'Diagnóstico avançado e solução eficiente em caça vazamentos na capital paulista e região metropolitana.',
		images: [
			{
				url: '/opengraph-image',
				width: 1200,
				height: 630,
				alt: 'Equipe técnica DRI TEC em atendimento de caça vazamentos em São Paulo',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DRI TEC | Caça Vazamentos em São Paulo',
		description:
			'Empresa especializada em caça vazamentos para quem exige agilidade e precisão em grandes centros urbanos.',
		images: ['/opengraph-image'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	formatDetection: {
		telephone: true,
		address: true,
		email: true,
	},
	other: {
		'geo.region': 'BR-SP',
		'geo.placename': 'São Paulo',
		'geo.position': '-23.55052;-46.633308',
		ICBM: '-23.55052, -46.633308',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
				/>
				{children}
			</body>
		</html>
	);
}
