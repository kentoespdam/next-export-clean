import create from "zustand";
import {
	IDetailSaldo,
	IDetailSaldoRequest,
} from "../components/detailsaldo/detailsaldo.column";
import { IPages } from "../helpers/common.interface";

interface IDetailSaldoStore {
	isLoading: boolean;
	detSaldoRequest: IDetailSaldoRequest;
	page: IPages<IDetailSaldo> | null;
	toggleLoading: () => void;
	setRequest: (v: IDetailSaldoRequest) => void;
	setPage: (v: IPages<IDetailSaldo> | null) => void;
}

export const useDetailSaldoStore = create<IDetailSaldoStore>((set) => ({
	isLoading: false,
	detSaldoRequest: {
		pos: 0,
		limit: 10,
	},
	page: null,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	setRequest: (value) =>
		set((state) => ({ ...state, detSaldoRequest: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
}));
