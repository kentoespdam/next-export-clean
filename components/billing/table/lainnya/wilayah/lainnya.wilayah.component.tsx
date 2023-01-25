import StripedTableStyle from "../../striped.table.style";
import LainnyaFooter from "../lainnya.footer";
import LainnyaWilayahBody from "./lainnya.wilayah.body";
import LainnyaWilayahHead from "./lainnya.wilayah.head";

const LainnyaWilayahComponent = () => {
	return (
		<StripedTableStyle>
			<LainnyaWilayahHead />
			<LainnyaWilayahBody />
			<LainnyaFooter />
		</StripedTableStyle>
	);
};

export default LainnyaWilayahComponent;
