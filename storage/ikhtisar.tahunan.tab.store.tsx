import create from "zustand";
import IkhtisarTabWilayah from "../components/ikhtisartahunan/tab/ikhtisar.tab.wilayah";
import IkhtisarTabGolongan from "../components/ikhtisartahunan/tab/ikhtisar.tab.golongan";

interface IkhtisarTahunanTab {
	tabIndex: number;
	setTabIndex: (v: number) => void;
}

export const useIkhtisarTabStore = create<IkhtisarTahunanTab>((set) => ({
	tabIndex: 0,
	setTabIndex: (value) => set((state) => ({ ...state, tabIndex: value })),
}));

export const ikhtisarTabHandler = (index: number) => {
	switch (index) {
		case 0:
			return <IkhtisarTabWilayah />;
		case 1:
			return <IkhtisarTabGolongan />;
	}
};

/**
 * Jenis Laporan Store
 */

interface IIkhtisarTahunanLaporanStore {
	jnsLap: string;
	setRadio: (value: string) => void;
}

export const useIkhtisarTahunanLaporanStore =
	create<IIkhtisarTahunanLaporanStore>((set) => ({
		jnsLap: "jmlTag",
		setRadio: (value) =>
			set((state) => ({
				...state,
				jnsLap: value,
			})),
	}));
