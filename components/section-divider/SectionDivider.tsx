import Image from "next/image";

export default function SectionDivider() {
	return (
		<div id="section-divider" className="relative -z-10 w-full -mt-[8%] md:-mt-[8%] pointer-events-none overflow-hidden">
			<Image
				src="/images/sectionDivider.png"
				width={1920}
				height={30}
				alt="divider"
				className="block w-full h-auto"
			/>
		</div>
	);
}