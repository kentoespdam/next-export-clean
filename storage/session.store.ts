import { Session } from "next-auth";
import create from "zustand";

interface ISessionStore {
	session: Session | null;
	setSession: (v: Session) => void;
}

export const useSessionStore = create<ISessionStore>((set) => ({
	session: null,
	setSession: (value) => set((state) => ({ ...state, session: value })),
}));
