import { signIn } from "@src/auth";
import { Button } from "@src/components/ui/button";

const LoginButton = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("keycloak");
			}}
		>
			<Button type="submit" variant="default" className="relative">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
					&nbsp;
				</span>
				Login
			</Button>
		</form>
	);
};

export default LoginButton;
