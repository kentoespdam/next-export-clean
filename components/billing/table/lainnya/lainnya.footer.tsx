import { useLainnyaStore } from "@storage/billing.tab.store";
import LainnyaDiameterFooter from "./diameter/lainnya.diameter.footer";
import LainnyaWilayahFooter from "./wilayah/lainnya.wilayah.footer";

const LainnyaFooter = () => {
	const tabIndex = useLainnyaStore((state) => state.tabIndex);

	return tabIndex === 0 ? (
		<LainnyaDiameterFooter />
	) : (
		<LainnyaWilayahFooter />
	);
};

export default LainnyaFooter;
