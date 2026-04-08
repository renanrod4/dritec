import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
	textClassName?: string;
}

export function Logo({ textClassName = 'text-text-on-blue' }: LogoProps) {
	return (
		<li className="flex-1 flex items-start">
			<Link href="/#initial-section" className="flex items-center gap-2">
				<Image src="/images/logo.png" alt="Logo" width={50} height={50} />
				<span className={`${textClassName} text-[22px] font-bold font-inter transition-colors`}>DRI TEC</span>
			</Link>
		</li>
	);
}
