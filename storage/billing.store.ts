import create from "zustand";
import {
	IBillingRequest,
	IFinalDrd,
} from "../components/billing/billing.column";

interface IBilingStore {
	isLoading: boolean;
	formReq: IBillingRequest | null;
	page?: IFinalDrd | null;
	toggleLoading: () => void;
	setRequest: (v: IBillingRequest) => void;
	setPage: (v: IFinalDrd | null) => void;
}

export const useBillingStore = create<IBilingStore>((set) => ({
	isLoading: false,
	formReq: null,
	page: null,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	setRequest: (value) => set((state) => ({ ...state, formReq: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
}));
