import { DropdownMenuItem } from "@components/ui/dropdown-menu";
import { signOut } from "@src/auth";
import { Button } from "@src/components/ui/button";
import { LogOutIcon } from "lucide-react";

const LogoutButton = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signOut();
			}}
		>
			<DropdownMenuItem className="cursor-pointer p-0">
				<Button type="submit" variant="ghost" className="w-full h-full m-0">
					<LogOutIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
					<span>Logout</span>
				</Button>
			</DropdownMenuItem>
		</form>
	);
};

export default LogoutButton;
