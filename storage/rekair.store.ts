import { IRekair, IRekairRequest } from "../components/rekair/rekair.column";
import { IPages } from "../helpers/common.interface";
import create from "zustand";
interface IRekairStore {
	isLoading: boolean;
	formReq: IRekairRequest;
	page: IPages<IRekair> | null;
	toggleLoading: () => void;
	setRequest: (v: IRekairRequest) => void;
	setPage: (v: IPages<IRekair> | null) => void;
}

export const useRekairStore = create<IRekairStore>((set) => ({
	isLoading: false,
	formReq: {
		pos: 0,
		limit: 10,
	},
	page: null,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	setRequest: (value) => set((state) => ({ ...state, formReq: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
}));
