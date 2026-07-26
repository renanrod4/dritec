interface InitialSectionTitleProps {
	mainText: string;
	highlightText: string;
}

export function InitialSectionTitle({ mainText, highlightText }: InitialSectionTitleProps) {
	return (
		<h1 className="font-extrabold text-center text-[clamp(2rem,5vw,3.5rem)] w-[15ch] leading-[1.1]">
			{mainText}
			<span className="text-highlight-light-blue"> {highlightText}</span>
		</h1>
	);
}
