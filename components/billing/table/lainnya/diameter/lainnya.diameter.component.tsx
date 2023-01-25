import StripedTableStyle from "../../striped.table.style";
import LainnyaFooter from "../lainnya.footer";
import LainnyaDiameterBody from "./lainnya.diameter.body";
import LainnyaDiameterHead from "./lainnya.diameter.head";

const LainnyaDiameterComponent = () => {
	return (
		<StripedTableStyle>
			<LainnyaDiameterHead />
			<LainnyaDiameterBody />
			<LainnyaFooter />
		</StripedTableStyle>
	);
};

export default LainnyaDiameterComponent;
