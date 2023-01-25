import { createTheme, Theme } from "@mui/material/styles";
import create from "zustand";
import { devtools } from "zustand/middleware";

const theme = createTheme();
interface IRootStore {
	theme: Theme;
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

export const useRootStore = create<IRootStore>()(
	devtools((set) => ({
		theme: theme,
		isMenuOpen: false,
		toggleMenu: () =>
			set((state) => ({
				...state,
				isMenuOpen: !state.isMenuOpen,
			})),
	}))
);
