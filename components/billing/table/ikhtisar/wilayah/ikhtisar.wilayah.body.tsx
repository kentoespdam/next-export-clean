import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IUnitData } from "../../../interface/unit.data";
import IkhtisarWilayahRowBuilder from "./ikhtisar.wilayah.row.builder";
import { useBillingStore } from "@storage/billing.store";
import { cabangList, ICabang } from "@service/cabang";

type RowGroupBuilderProps = {
	satker: ICabang;
	rows: IUnitData[];
};
const RowGroupBuilder = (props: RowGroupBuilderProps) => {
	const { rows, satker } = props;

	return (
		<>
			<TableRow key={satker.kodeCabang}>
				<TableCell
					colSpan={14}
					sx={{ background: "#686565", color: "white" }}>
					Cabang {satker.namaCabang}
				</TableCell>
			</TableRow>

			{rows.map((row, index) =>
				row.cabang === satker.kodeCabang ? (
					<IkhtisarWilayahRowBuilder key={index} row={row} />
				) : null
			)}
		</>
	);
};

const IkhtisarWilayahBody = () => {
	const rows = useBillingStore((state) => state.page?.unitDataList);

	return rows === undefined ? null : (
		<TableBody>
			{cabangList.map((cabang) => (
				<RowGroupBuilder
					key={cabang.kodeCabang}
					satker={cabang}
					rows={rows}
				/>
			))}
		</TableBody>
	);
};

export default IkhtisarWilayahBody;
