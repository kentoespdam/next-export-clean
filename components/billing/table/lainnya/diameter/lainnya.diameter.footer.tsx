import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import { IUnitUkmetData } from "../../../interface/unit.ukmet.data";
import { useBillingStore } from "@storage/billing.store";
import { useLainnyaJenisLaporanStore } from "@storage/billing.tab.store";
import { convertToRupiah } from "@helpers/object.formatter";

const reduceTotal = (rows: IUnitUkmetData[], ukmet: string, jnsLap: string) => {
	return rows.reduce((result, row) => {
		const filter = row.ukmetDataList.filter((arr) => arr.ukmet === ukmet);
		switch (jnsLap) {
			case "jmlTag":
				result += filter[0].totTagihan;
				break;
			case "volPakai":
				result += filter[0].totPakai;
				break;
			case "jmlAktif":
				result += filter[0].totAktif;
				break;
			case "jmlPasif":
				result += filter[0].totPasif;
				break;
			case "jmlAktifPasif":
				result += filter[0].totRekening;
				break;
		}
		return result;
	}, 0);
};

const LainnyaDiameterFooter = () => {
	const rows = useBillingStore((state) => state.page?.unitUkmetDataList);
	const jnsLap = useLainnyaJenisLaporanStore((state) => state.jnsLap);
	let finalTotal = 0;

	if (rows === undefined) {
		return (
			<TableFooter>
				<TableRow>
					<TableCell variant="body">Total</TableCell>
				</TableRow>
			</TableFooter>
		);
	}

	return (
		<TableFooter>
			<TableRow>
				<TableCell variant="body">Total</TableCell>
				{rows[0].ukmetDataList.map((ukmet, index) => {
					const total = reduceTotal(rows, ukmet.ukmet, jnsLap);
					finalTotal += total;
					return (
						<TableCell variant="body" key={index} align="right">
							{jnsLap === "jmlTag"
								? convertToRupiah(total)
								: total.toLocaleString()}
						</TableCell>
					);
				})}
				<TableCell variant="body" align="right">
					{jnsLap === "jmlTag"
						? convertToRupiah(finalTotal)
						: finalTotal.toLocaleString()}
				</TableCell>
			</TableRow>
		</TableFooter>
	);
};

export default LainnyaDiameterFooter;
