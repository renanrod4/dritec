import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
	return (
		<li className="flex-1">
			<Link href="/" className="flex items-center gap-2">
				<Image src="/images/logo.png" alt="Logo" width={50} height={50} />
				<span className="text-text-on-blue text-[22px] font-bold font-inter">DRI TEC</span>
			</Link>
		</li>
	);
}
