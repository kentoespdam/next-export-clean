import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { convertToRupiah } from "@helpers/object.formatter";
import { IUnitData } from "../../../interface/unit.data";

type IkhtisarWilayahRowBuilderProps = {
	row: IUnitData;
};

const IkhtisarWilayahRowBuilder = (props: IkhtisarWilayahRowBuilderProps) => {
	const { row } = props;

	return (
		<TableRow>
			<TableCell>{row.nama}</TableCell>
			<TableCell align="right">{row.totAktif.toLocaleString()}</TableCell>
			<TableCell align="right">{row.totPasif.toLocaleString()}</TableCell>
			<TableCell align="right">
				{row.totRekening.toLocaleString()}
			</TableCell>
			<TableCell align="right">{row.totPakai.toLocaleString()}</TableCell>
			<TableCell align="right">{convertToRupiah(row.totAir)}</TableCell>
			<TableCell align="right">{convertToRupiah(row.totBeban)}</TableCell>
			<TableCell align="right">{convertToRupiah(row.totBpsda)}</TableCell>
			<TableCell align="right">
				{convertToRupiah(row.totAngAir)}
			</TableCell>
			<TableCell align="right">
				{convertToRupiah(row.totAngNonAir)}
			</TableCell>
			<TableCell align="right">
				{convertToRupiah(row.totTagihan)}
			</TableCell>
			<TableCell align="right">{row.rataAir.toLocaleString()}</TableCell>
			<TableCell align="right">
				{row.rataPakai.toLocaleString()}
			</TableCell>
		</TableRow>
	);
};

export default IkhtisarWilayahRowBuilder;
