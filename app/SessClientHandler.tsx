"use client";
import { Session } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { MyToken } from "@helpers/keycloak.helper";
import { IChildrenNode } from "./layout";

interface ICusSess extends Session {
	token?: MyToken;
}

const SessClientHandler = ({ children }: IChildrenNode) => {
	const session = useSession();

	if (session.status === "loading") return <>Waiting for data...</>;
	if (session.status === "unauthenticated") signIn();
	const cusSession: ICusSess | null = session.data;
	// console.log(cusSession);

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	if (cusSession?.token!.error) signOut();
	return <>{children}</>;
};

export default SessClientHandler;
