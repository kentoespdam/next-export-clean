import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import { requestNewToken } from "@helpers/keycloak.helper";

export const authOptions: NextAuthOptions = {
	secret: String(process.env.NEXTAUTH_SECRET),
	//next-auth OAuth Provider config
	providers: [
		{
			id: "keycloak",
			name: "Keycloak",
			type: "oauth",
			wellKnown: process.env.KEYCLOAK_WELLKNOWN,
			idToken: true,
			checks: ["pkce", "state"],
			issuer: process.env.KEYCLOAK_ISSUER,
			clientId: String(process.env.KEYCLOAK_ID),
			clientSecret: String(process.env.KEYCLOAK_SECRET),
			authorization: process.env.KEYCLOAK_AUTHORIZATION,
			token: process.env.KEYCLOAK_TOKEN,
			userinfo: process.env.KEYCLOAK_USERINFO,
			profile(profile) {
				return { ...profile, id: profile.sid };
			},
		},
	],
	debug: true,
	callbacks: {
		async jwt({ token, account, profile }) {
			if (profile && account) {
				return {
					...token,
					account: account,
					profile: profile,
					error: false,
				};
			}
			return await requestNewToken(token);
			return token;
		},
		async session({ session, token }) {
			if (token) {
				// console.log(token);

				return { ...session, token: token };
			}
			return session;
		},
	},
};

export default NextAuth(authOptions);
