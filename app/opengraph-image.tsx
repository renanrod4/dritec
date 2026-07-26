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
				position: 'relative',
				background: 'linear-gradient(135deg, #0f172a 0%, #0a2745 45%, #0e7490 100%)',
				color: '#ffffff',
				fontFamily: 'Segoe UI, Arial, sans-serif',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					right: -140,
					top: -140,
					width: 420,
					height: 420,
					borderRadius: 9999,
					background: 'rgba(147, 197, 253, 0.2)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: -90,
					bottom: -140,
					width: 360,
					height: 360,
					borderRadius: 9999,
					background: 'rgba(56, 189, 248, 0.22)',
				}}
			/>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '58px 72px',
					width: '100%',
					height: '100%',
					zIndex: 1,
				}}
			>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: 62,
							height: 62,
							borderRadius: 18,
							background: 'rgba(255, 255, 255, 0.14)',
							fontSize: 22,
							fontWeight: 700,
						}}
					>
						DT
					</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<span style={{ fontSize: 34, fontWeight: 800, letterSpacing: 0.5 }}>DRI TEC</span>
						<span style={{ fontSize: 20, color: '#bfdbfe' }}>Caça vazamentos em São Paulo</span>
					</div>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900 }}>
					<span style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.06 }}>
						Detecção não destrutiva de vazamentos
					</span>
					<span style={{ fontSize: 34, color: '#dbeafe', lineHeight: 1.28 }}>
						Atendimento 24h para residências, condomínios e empresas.
					</span>
				</div>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%',
						fontSize: 26,
						color: '#bae6fd',
					}}
				>
					<span>São Paulo e região metropolitana</span>
					<span style={{ fontWeight: 700 }}>WhatsApp: (11) 97324-3498</span>
				</div>
			</div>
		</div>,
		size,
	);
}
