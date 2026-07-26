export type LocalCopyKey = 'sao-paulo' | 'zona-sul' | 'zona-leste' | 'abc';

export interface HomeCopyVariant {
	key: LocalCopyKey;
	metadataTitle: string;
	metadataDescription: string;
	heroTitle: string;
	heroTitleHighlight: string;
	heroDescription: string;
	priorityMessage: string;
}

const HOME_COPY_VARIANTS: Record<LocalCopyKey, HomeCopyVariant> = {
	'sao-paulo': {
		key: 'sao-paulo',
		metadataTitle: 'Caça Vazamentos em São Paulo',
		metadataDescription:
			'DRI TEC: detecção precisa e não destrutiva de vazamentos em São Paulo, com atendimento técnico e rápido para imóveis residenciais e comerciais.',
		heroTitle: 'Caça Vazamentos',
		heroTitleHighlight: 'em São Paulo',
		heroDescription:
			'Solução rápida e não destrutiva para vazamentos de água e esgoto na capital paulista. Quanto antes identificar, menor o risco de danos e desperdício.',
		priorityMessage: 'Atendimento 24h em São Paulo com prioridade para chamados de hoje.',
	},
	'zona-sul': {
		key: 'zona-sul',
		metadataTitle: 'Caça Vazamentos na Zona Sul de São Paulo',
		metadataDescription:
			'DRI TEC com atendimento ágil na Zona Sul de São Paulo para detecção e reparo de vazamentos com tecnologia não destrutiva.',
		heroTitle: 'Caça Vazamentos',
		heroTitleHighlight: 'na Zona Sul',
		heroDescription:
			'Atendimento técnico na Zona Sul de São Paulo para identificar vazamentos com precisão e reduzir custos de reparo antes que o problema cresça.',
		priorityMessage: 'Atendimento 24h na Zona Sul com prioridade para chamados de hoje.',
	},
	'zona-leste': {
		key: 'zona-leste',
		metadataTitle: 'Caça Vazamentos na Zona Leste de São Paulo',
		metadataDescription:
			'DRI TEC atende a Zona Leste com diagnóstico avançado de vazamentos de água e esgoto, com foco em agilidade e menor impacto na estrutura.',
		heroTitle: 'Caça Vazamentos',
		heroTitleHighlight: 'na Zona Leste',
		heroDescription:
			'Equipe especializada para detecção de vazamentos na Zona Leste, com método não destrutivo e atendimento rápido para residências e empresas.',
		priorityMessage: 'Atendimento 24h na Zona Leste com prioridade para chamados de hoje.',
	},
	abc: {
		key: 'abc',
		metadataTitle: 'Caça Vazamentos no ABC Paulista',
		metadataDescription:
			'DRI TEC em operação no ABC Paulista para detecção de vazamentos com precisão técnica, atendimento rápido e solução eficiente.',
		heroTitle: 'Caça Vazamentos',
		heroTitleHighlight: 'no ABC Paulista',
		heroDescription:
			'Detecção não destrutiva de vazamentos para imóveis residenciais e comerciais no ABC Paulista, com foco em agilidade e economia no reparo.',
		priorityMessage: 'Atendimento 24h no ABC Paulista com prioridade para chamados de hoje.',
	},
};

export const defaultHomeCopyVariant = HOME_COPY_VARIANTS['sao-paulo'];

export function resolveHomeCopyVariant(localKey?: string): HomeCopyVariant {
	if (!localKey) {
		return defaultHomeCopyVariant;
	}

	const normalized = localKey
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.trim();

	switch (normalized) {
		case 'sao-paulo':
		case 'saopaulo':
		case 'sp':
			return HOME_COPY_VARIANTS['sao-paulo'];
		case 'zona-sul':
		case 'zonasul':
			return HOME_COPY_VARIANTS['zona-sul'];
		case 'zona-leste':
		case 'zonaleste':
			return HOME_COPY_VARIANTS['zona-leste'];
		case 'abc':
		case 'abc-paulista':
			return HOME_COPY_VARIANTS.abc;
		default:
			return defaultHomeCopyVariant;
	}
}

export const localBusinessJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	name: 'DRI TEC',
	image: 'https://dritec.vercel.app/opengraph-image',
	url: 'https://dritec.vercel.app',
	telephone: '+55 11 97324-3498',
	description:
		'Empresa especializada em caça vazamentos em São Paulo e região metropolitana, com atendimento técnico e não destrutivo.',
	priceRange: '$$',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'São Paulo',
		addressRegion: 'SP',
		addressCountry: 'BR',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: -23.55052,
		longitude: -46.633308,
	},
	areaServed: [
		{ '@type': 'City', name: 'São Paulo' },
		{ '@type': 'AdministrativeArea', name: 'Zona Sul de São Paulo' },
		{ '@type': 'AdministrativeArea', name: 'Zona Leste de São Paulo' },
		{ '@type': 'AdministrativeArea', name: 'ABC Paulista' },
	],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '00:00',
			closes: '23:59',
		},
	],
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+55 11 97324-3498',
		contactType: 'customer service',
		areaServed: 'BR-SP',
		availableLanguage: ['pt-BR'],
	},
	sameAs: ['https://wa.me/5511973243498'],
};
