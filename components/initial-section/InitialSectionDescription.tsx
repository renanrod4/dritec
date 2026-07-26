interface InitialSectionDescriptionProps {
	text: string;
}

export function InitialSectionDescription({ text }: InitialSectionDescriptionProps) {
	return <p className="text-center text-lg mt-4 text-highlight-pale-blue max-w-[67ch]">{text}</p>;
}
