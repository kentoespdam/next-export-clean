import StripedTableStyle from "../../billing/table/striped.table.style";
import IkhtisarTahunanGolonganBody from "../table/golongan/ikhtisar.tahunan.golongan.body";
import IkhtisarTahunanGolonganFooter from "../table/golongan/ikhtisar.tahunan.golongan.footer";
import IkhtisarTahunanHead from "../table/iktisar.tahunan.head";

const IkhtisarTabGolongan = () => {
	return (
		<StripedTableStyle>
			<IkhtisarTahunanHead berdasar="Golongan" />
			<IkhtisarTahunanGolonganBody />
			<IkhtisarTahunanGolonganFooter />
		</StripedTableStyle>
	);
};

export default IkhtisarTabGolongan;
