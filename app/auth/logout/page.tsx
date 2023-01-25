"use client";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Page = () => {
	useEffect(() => {
		signOut();
	}, []);
	return <div>Logging out....</div>;
};

export default Page;
