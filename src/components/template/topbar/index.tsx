import { Avatar } from "@components/ui/avatar";
import { SidebarTrigger } from "@components/ui/sidebar";
import logo from "@public/images/logo_pdam_40x40.png";
import Image from "next/image";
import ProfileComponent from "./profile";
import type { Session } from "next-auth";

const TopBarTemplate = ({ session }: { session: Session | null }) => {
	return (
		<div className="w-full h-[60px] sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-row justify-between items-center px-4">
			<div className="flex flex-wrap gap-2 items-center content-center h-full">
				<SidebarTrigger />
				<Avatar className="h-10 w-12">
					<Image
						alt="Logo Perumdam Tirta Satria"
						src={logo}
						fill
						loading="lazy"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</Avatar>
				<div className="font-bold text-2xl">Kepegawaian</div>
				{/* <RenewAuthToken /> */}
			</div>
			<ProfileComponent session={session} />
		</div>
	);
};

export default TopBarTemplate;
