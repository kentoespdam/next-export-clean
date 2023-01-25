"use client";
import { Session } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { IChildrenNode } from "./layout";

interface ICusSess extends Session {
	error?: boolean;
}

const SessClientHandler = ({ children }: IChildrenNode) => {
	const session = useSession();

	if (session.status === "loading") return <>Waiting for data...</>;
	if (session.status === "unauthenticated") signIn();
	const cusSession: ICusSess | null = session.data;
	if (cusSession?.error) signOut();
	return <>{children}</>;
};

export default SessClientHandler;
