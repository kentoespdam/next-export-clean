import StripedTableStyle from "../../billing/table/striped.table.style";
import IkhtisarTahunanHead from "../table/iktisar.tahunan.head";
import IkhtisarTahunanWilayahBody from "../table/wilayah/ikhtisar.tahunan.wilayah.body";
import IkhtisarTahunanWilayahFooter from "../table/wilayah/ikhtisar.tahunan.wilayah.footer";

const IkhtisarTabWilayah = () => {
	return (
		<StripedTableStyle>
			<IkhtisarTahunanHead berdasar="Wilayah" />
			<IkhtisarTahunanWilayahBody />
			<IkhtisarTahunanWilayahFooter />
		</StripedTableStyle>
	);
};

export default IkhtisarTabWilayah;
