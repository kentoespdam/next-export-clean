import { Session, unstable_getServerSession } from "next-auth";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

interface MySession extends Session {
	error: boolean;
}

const SessHandler = async () => {
	const cookie = cookies();
	const callbackUrl = cookie.get("next-auth.callback-url")?.value;
	const callbackUri = encodeURIComponent(String(callbackUrl));

	const session: MySession | null = await unstable_getServerSession(
		authOptions
	);

	if (!session) {
		redirect(
			`${process.env.NEXTAUTH_URL}/api/auth/signin?callback=${callbackUri}`
		);
	}

	if (session.error) redirect(`${process.env.NEXTAUTH_URL}/auth/logout`);
};

export default SessHandler;
