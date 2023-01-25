import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth/index";
import KeycloackProvider from "next-auth/providers/keycloak";
import { requestNewToken } from "../../../helpers/keycloak.helper";

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		KeycloackProvider({
			clientId: String(process.env.KEYCLOAK_ID),
			clientSecret: String(process.env.KEYCLOAK_SECRET),
			issuer: String(process.env.KEYCLOAK_ISSUER),
		}),
	],
	session: {
		strategy: "jwt",
	},
	jwt: {},
	callbacks: {
		async jwt({ token, user, account }) {
			// console.log(account);
			if (account && user) {
				return {
					accessToken: account.access_token,
					accessTokenExpired: Number(account.expires_at) * 1000,
					refreshToken: account.refresh_token,
					refreshTokenExpired:
						Date.now() + Number(account.refresh_expires_in) * 1000,
					user,
				};
			}

			if (Date.now() < Number(token.accessTokenExpired)) {
				return token;
			}

			token = await requestNewToken(token);
			return token;
		},

		async session({ session, token }) {
			if (token) {
				return {
					...session,
					accessToken: token.accessToken,
					refreshToken: token.refreshToken,
					accessTokenExpired: token.accessTokenExpired,
					refreshTokenExpired: token.refreshTokenExpired,
					error: token?.error,
				};
			}

			return session;
		},
	},
};

const AuthHandler: NextApiHandler = async (req, res) => {
	return await NextAuth(req, res, authOptions);
};

export default AuthHandler;
