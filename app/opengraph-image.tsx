import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
	return new ImageResponse(
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
				backgroundImage: 'linear-gradient(180deg, #0a1628 0%, #0d47a1 100%)',
				color: '#ffffff',
				fontFamily: 'Segoe UI, Arial, sans-serif',
				overflow: 'hidden',
				boxSizing: 'border-box',
				padding: '50px',
				paddingBottom: '20px',
			}}
		>
			<div
				style={{
					position: 'absolute',
					display: 'flex',
					width: '100%',
					height: '100%',
					top: 0,
					left: 0,
					opacity: 0.1,
				}}
			>
				<img
					src="https://dri.tec.br/images/opengraph-bg.png"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
			</div>

			<header style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
				<div
					style={{
						padding: '5px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						marginRight: '15px',
					}}
				>
					<img src="https://dri.tec.br/images/logo.png" style={{ width: '50px', height: '50px' }} />
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h2 style={{ margin: '0', fontWeight: '500', fontSize: '24px' }}>DRI TEC</h2>
					<p style={{ color: '#9ca3af', margin: '0', fontSize: '18px' }}>Caça vazamentos em São Paulo</p>
				</div>
			</header>
			<main
				style={{
					display: 'flex',
					width: '100%',
					paddingRight: '50px',
					paddingLeft: '50px',
					flex: 1,
				}}
			>
				<div
					style={{
						flex: '1',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'flex-start',
					}}
				>
					<h1 style={{ fontSize: '40px', margin: '0', lineHeight: 1.2 }}>
						Detecção não destrutiva de vazamentos
					</h1>
					<p style={{ fontSize: '24px', color: '#dbeafe', marginTop: '20px' }}>
						Atendimento 24h para residências, condomínios e empresas.
					</p>
				</div>
				<div
					style={{
						flex: '1',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src="https://dri.tec.br/images/logo.png"
						style={{ width: '350px', height: '350px', objectFit: 'contain' }}
					/>
				</div>
			</main>

			<footer
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					color: '#dbeafe',
					fontSize: '22px',
					paddingTop: '20px',
				}}
			>
				<p style={{ margin: 0 }}>São Paulo e região metropolitana</p>
				<p style={{ margin: 0 }}>WhatsApp: (11) 97324-3498</p>
			</footer>
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
