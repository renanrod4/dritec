import { WhatsappBtn } from '../WhatsappBtn';
import { SecondaryButton } from './SecondaryButton';

export function InitialSectionActions() {
	return (
		<div className="mt-5 flex w-full max-w-3xl flex-col items-stretch justify-center gap-3 px-4 sm:flex-row sm:items-center sm:gap-4">
			<WhatsappBtn
				text="Solicitar Orçamento"
				iconSize={22}
				className="text-base font-semibold sm:min-w-[18rem] sm:py-4 sm:text-lg"
			/>
			<SecondaryButton />
		</div>
	);
}
