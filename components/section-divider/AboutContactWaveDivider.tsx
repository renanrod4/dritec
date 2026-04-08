export default function AboutContactWaveDivider() {
	return (
		<div
			aria-hidden="true"
			className="relative -mt-8 h-24 w-full overflow-hidden bg-background-white pointer-events-none sm:h-32"
		>
			<svg
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
				className="absolute inset-x-0 bottom-0 h-full w-full"
			>
				{/* 4 camadas de ondas com opacidades diferentes para criar um efeito de profundidade */}
				<path
					d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,154.7C672,171,768,181,864,181.3C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L0,320Z"
					className="fill-brand-dark/25"
				/>
				<path
					d="M0,256L48,234.7C96,213,192,171,288,149.3C384,128,480,128,576,144C672,160,768,192,864,186.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L0,320Z"
					className="fill-brand-dark/45"
				/>
				<path
					d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,192C672,203,768,213,864,202.7C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L0,320Z"
					className="fill-brand-dark/65"
				/>
				<path
					d="M0,288L48,293.3C96,299,192,309,288,293.3C384,277,480,235,576,213.3C672,192,768,192,864,208C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L0,320Z"
					className="fill-brand-dark"
				/>
			</svg>
		</div>
	);
}
