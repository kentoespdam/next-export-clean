import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import StripedTableStyle from "../striped.table.style";
import IkhtisarFooter from "./ikhtisar.footer";
import IkhtisarHead from "./ikhtisar.head";
import IkhtisarGolonganBody from "./golongan/ikhtisar.golongan.body";
import { useIkhtisarTabStore } from "../../../../storage/billing.tab.store";
import IkhtisarWilayahBody from "./wilayah/ikhtisar.wilayah.body";
import IkhtisarSatkerBody from "./satker/ikhtisar.satker.body";

const IkhtisarBodyBuilder = () => {
	const tabIndex = useIkhtisarTabStore((state) => state.tabIndex);
	switch (tabIndex) {
		case 0:
			return <IkhtisarGolonganBody />;
		case 1:
			return <IkhtisarWilayahBody />;
		case 2:
			return <IkhtisarSatkerBody />;
		default:
			return <IkhtisarGolonganBody />;
	}
};

const IkhtisarComponent = () => {
	return (
		<TableContainer component={Box} sx={{ width: "100%", height: "100%" }}>
			<StripedTableStyle>
				<IkhtisarHead />
				<IkhtisarBodyBuilder />
				<IkhtisarFooter />
			</StripedTableStyle>
		</TableContainer>
	);
};

export default IkhtisarComponent;
