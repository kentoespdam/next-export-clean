"use client";

import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import { useRootStore } from "../../storage/rootStore";
import { IChildrenNode } from "../../app/layout";

const ThemeProviderComponent = ({ children }: IChildrenNode) => {
	const theme = useRootStore((state) => state.theme);
	return (
		<ThemeProvider theme={theme}>
			<SessionProvider>{children}</SessionProvider>
		</ThemeProvider>
	);
};

export default ThemeProviderComponent;
