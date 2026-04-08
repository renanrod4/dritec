import { WhatsappBtn } from '../WhatsappBtn';
import { SecondaryButton } from './SecondaryButton';

export function InitialSectionActions() {
	return (
		<div className="mt-5 flex w-full max-w-3xl flex-col items-center justify-center gap-3 px-4">
			<div className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
				<WhatsappBtn
					text="Falar Agora no WhatsApp"
					iconSize={22}
					className="text-base font-semibold sm:min-w-[18rem] sm:py-4 sm:text-lg"
				/>
				<SecondaryButton />
			</div>

			<div className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-base text-highlight-pale-blue">
				<span className="h-2 w-2 rounded-full bg-whatsapp animate-pulse" aria-hidden="true" />
				Atendimento 24h com prioridade para chamados de hoje.
			</div>
		</div>
	);
}
