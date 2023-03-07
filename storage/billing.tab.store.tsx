import create from "zustand";
import BillingTabIkhtisar from "../components/billing/tab/billing.tab.ikhtisar";
import BillingTabLainnya from "../components/billing/tab/billing.tab.lainnya";

interface IBillingTab {
	tabIndex: number;
	setTabIndex: (value: number) => void;
}

export const useBillingTabStore = create<IBillingTab>((set) => ({
	tabIndex: 0,
	setTabIndex: (value) => set((state) => ({ ...state, tabIndex: value })),
}));

/*
Ikhtisar Tab Store
*/
interface IIkhtisarTabStore {
	tabIndex: number;
	setIkhtisarTabIndex: (value: number) => void;
}

export const useIkhtisarTabStore = create<IIkhtisarTabStore>((set) => ({
	tabIndex: 0,
	setIkhtisarTabIndex: (value) =>
		set((state) => ({
			...state,
			tabIndex: value,
		})),
}));

/*
Lainnya Tab Store
*/

interface LainnyaStore {
	tabIndex: number;
	setLainnyaTabIndex: (value: number) => void;
}

export const useLainnyaStore = create<LainnyaStore>((set) => ({
	tabIndex: 0,
	setLainnyaTabIndex: (value) =>
		set((state) => ({ ...state, tabIndex: value })),
}));

export const billingTabHandler = (index: number) => {
	switch (index) {
		case 0:
			return <BillingTabIkhtisar />;
		case 1:
			return <BillingTabLainnya />;
	}
};

/*
Lainnya Jenis Laporan Store
*/

interface ILainnyaJenisLaporanStore {
	jnsLap: string;
	setRadio: (value: string) => void;
}

export const useLainnyaJenisLaporanStore = create<ILainnyaJenisLaporanStore>(
	(set) => ({
		jnsLap: "jmlTag",
		setRadio: (value) =>
			set((state) => ({
				...state,
				jnsLap: value,
			})),
	})
);
