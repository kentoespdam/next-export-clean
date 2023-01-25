import create from "zustand";
import {
	IIkhtisarPerTahun,
	IIkhtisarTahunanRequest,
} from "../components/ikhtisartahunan/ikhtisar.tahunan.column";
import { dateToStringFormat } from "../helpers/object.formatter";

interface IIkhitsarTahunanStore {
	isLoading: boolean;
	formReq: IIkhtisarTahunanRequest | null;
	page: IIkhtisarPerTahun[] | null;
	toggleLoading: () => void;
	setRequest: (v: IIkhtisarTahunanRequest) => void;
	setPage: (v: IIkhtisarPerTahun[] | null) => void;
}

const sekarang = new Date();

export const useIkhtisarTahunanStore = create<IIkhitsarTahunanStore>((set) => ({
	isLoading: false,
	formReq: {
		tahun: sekarang.getFullYear(),
		toBulan: sekarang.getMonth() + 1,
		tglCetak: dateToStringFormat(sekarang),
	},
	page: null,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	setRequest: (value) => set((state) => ({ ...state, formReq: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
}));
