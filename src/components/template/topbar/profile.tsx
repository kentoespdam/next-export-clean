import { Avatar, AvatarFallback } from "@components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import type { Session } from "next-auth";
import Image from "next/image";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

const ProfileComponent = ({ session }: { session: Session | null }) => {
	if (!session) return <LoginButton />;
	return (
		<div className="flex items-center gap-3 py-2">
			{/* <Suspense fallback={<div>Loading...</div>}>
				<EmployeeStateComponent userAccount={user} employee={employee} />
			</Suspense> */}
			<div className="hidden md:block lg:block">
				<div className="flex flex-col">
					{/* <h6 className="font-medium text-foreground">{user.name}</h6> */}
					{/* <span>{employee?.position.name}</span> */}
				</div>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className="h-10 w-10 cursor-pointer">
						<Image
							src="https://github.com/shadcn.png"
							alt="Employee Photo"
							loading="lazy"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
						<AvatarFallback>ID</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{/* <DropdownMenuLabel>{user.name}</DropdownMenuLabel> */}
					<DropdownMenuSeparator />
					{/* <DropdownMenuItem className="cursor-pointer hover:bg-accent">
						<KeyRoundIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
						<span>Change Password</span>
					</DropdownMenuItem> */}
					{/* <ThemeButton /> */}

					<LogoutButton />
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default ProfileComponent;
