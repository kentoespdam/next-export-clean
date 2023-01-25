import dayjs, { Dayjs } from "dayjs";
import { IPendapatan } from "../components/pendapatan/pendapatan.column";
import create from "zustand";
import { devtools } from "zustand/middleware";
import periodeHelper from "../helpers/periode.helper";

export interface IPendapatanRequest {
	fromPeriode: string;
	toPeriode: string;
	toTgl: string;
}

interface IPendapatanStore {
	isLoading: boolean;
	periodeAwal: string;
	periodeAkhir: string;
	toTgl: Dayjs;
	rows: IPendapatan[] | [];
	toggleLoading: () => void;
	setPeriodeAwal: (v: string) => void;
	setPeriodeAkhir: (v: string) => void;
	setToTgl: (v: Dayjs) => void;
	setRows: (v: IPendapatan[]) => void;
}

const periodes = periodeHelper.getListPeriode();
export const usePendapatanStore = create<IPendapatanStore>()(
	devtools((set) => ({
		isLoading: false,
		periodeAwal: periodes[0].periode,
		periodeAkhir: periodes[0].periode,
		toTgl: dayjs(new Date()),
		rows: [],
		toggleLoading: () =>
			set((state) => ({ ...state, isLoading: !state.isLoading })),
		setPeriodeAwal: (value) =>
			set((state) => ({ ...state, periodeAwal: value })),
		setPeriodeAkhir: (value) =>
			set((state) => ({ ...state, periodeAkhir: value })),
		setToTgl: (value) =>
			set((state) => ({ ...state, toTgl: dayjs(value) })),
		setRows: (value) => set((state) => ({ ...state, rows: value })),
	}))
);

