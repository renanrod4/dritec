import { WhatsappBtn } from '../WhatsappBtn';
import { SecondaryButton } from './SecondaryButton';

export function InitialSectionActions() {
	return (
		<div className="flex gap-4 w-full mt-5 items-center justify-center lg:max-w-[30%] flex-wrap sm:max-w-[50%]">
			<WhatsappBtn text="Solicitar Orçamento" iconSize={25} className="py-4 text-lg font-semibold flex-1" />
			<SecondaryButton />
		</div>
	);
}
