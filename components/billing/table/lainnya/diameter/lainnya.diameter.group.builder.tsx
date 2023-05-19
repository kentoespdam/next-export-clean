import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ICabang } from "@service/cabang";
import { IUnitUkmetData } from "../../../interface/unit.ukmet.data";
import LainnyaDiameterRowBuilder from "./lainnya.diameter.row.builder";

type LainnyaDiameterRowGroupBuilderProps = {
	satker: ICabang;
	rows: IUnitUkmetData[];
};

const LainnyaDiameterRowGroupBuilder = (
	props: LainnyaDiameterRowGroupBuilderProps
) => {
	const { rows, satker } = props;

	return (
		<>
			<TableRow>
				<TableCell
					colSpan={11}
					sx={{ background: "#686565", color: "white" }}>
					Cabang {satker.namaCabang}
				</TableCell>
			</TableRow>

			{rows.map((row, index) =>
				row.satker === satker.kodeCabang ? (
					<LainnyaDiameterRowBuilder key={index} row={row} />
				) : null
			)}
		</>
	);
};

export default LainnyaDiameterRowGroupBuilder;
