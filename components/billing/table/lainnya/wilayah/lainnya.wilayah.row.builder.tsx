import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { convertToRupiah } from "../../../../../helpers/object.formatter";
import { golonganList } from "../../../../../service/golongan";
import { useLainnyaJenisLaporanStore } from "../../../../../storage/billing.tab.store";
import { IGolonganData } from "../../../interface/golongan.data";
import { IUnitGolonganData } from "../../../interface/unit.golongan.data";

const totalReducer = (rows: IGolonganData[], jnsLap: string) => {
	return rows.reduce((result, row) => {
		switch (jnsLap) {
			case "jmlTag":
				result += row.totTagihan;
				break;
			case "volPakai":
				result += row.totPakai;
				break;
			case "jmlAktif":
				result += row.totAktif;
				break;
			case "jmlPasif":
				result += row.totPasif;
				break;
			case "jmlAktifPasif":
				result += row.totRekening;
				break;
		}
		return result;
	}, 0);
};

type LainnyaWilayahRowBuilderProps = {
	row: IUnitGolonganData;
};

const LainnyaWilayahRowBuilder = (props: LainnyaWilayahRowBuilderProps) => {
	const jnsLap = useLainnyaJenisLaporanStore((state) => state.jnsLap);
	const { row } = props;
	const total = totalReducer(row.golonganDataList, jnsLap);

	return (
		<TableRow>
			<TableCell>{row.nama}</TableCell>
			{golonganList
				.sort((a, b) =>
					a.kodeSubGolongan
						.substring(0, 1)
						.localeCompare(b.kodeSubGolongan.substring(0, 1))
				)
				.map((item, index) => {
					switch (jnsLap) {
						case "jmlTag":
							return (
								<TableCell align="right" key={index}>
									{convertToRupiah(
										filterGolonganDataList(
											row.golonganDataList,
											item.kodeGolongan
										).totTagihan
									)}
								</TableCell>
							);
						case "volPakai":
							return (
								<TableCell align="right" key={index}>
									{filterGolonganDataList(
										row.golonganDataList,
										item.kodeGolongan
									).totPakai.toLocaleString()}
								</TableCell>
							);
						case "jmlAktif":
							return (
								<TableCell align="right" key={index}>
									{filterGolonganDataList(
										row.golonganDataList,
										item.kodeGolongan
									).totAktif.toLocaleString()}
								</TableCell>
							);
						case "jmlPasif":
							return (
								<TableCell align="right" key={index}>
									{filterGolonganDataList(
										row.golonganDataList,
										item.kodeGolongan
									).totPasif.toLocaleString()}
								</TableCell>
							);
						case "jmlAktifPasif":
							return (
								<TableCell align="right" key={index}>
									{filterGolonganDataList(
										row.golonganDataList,
										item.kodeGolongan
									).totRekening.toLocaleString()}
								</TableCell>
							);
						default:
							return (
								<TableCell align="right" key={index}>
									{convertToRupiah(
										filterGolonganDataList(
											row.golonganDataList,
											item.kodeGolongan
										).totTagihan
									)}
								</TableCell>
							);
					}
				})}

			<TableCell align="right">
				{jnsLap === "jmlTag"
					? convertToRupiah(total)
					: total.toLocaleString()}
			</TableCell>
		</TableRow>
	);
};

export default LainnyaWilayahRowBuilder;

function filterGolonganDataList(
	golonganDataList: IGolonganData[],
	kodeGolongan: string
) {
	return golonganDataList.filter(
		(item) => item.kodeGolongan === kodeGolongan
	)[0];
}

/*
{row.golonganDataList.map((data, index) => {
				switch (jnsLap) {
					case "jmlTag":
						return (
							<TableCell align="right" key={index}>
								{convertToRupiah(data.totTagihan)}
							</TableCell>
						);
					case "volPakai":
						return (
							<TableCell align="right" key={index}>
								{data.totPakai.toLocaleString()}
							</TableCell>
						);
					case "jmlAktif":
						return (
							<TableCell align="right" key={index}>
								{data.totAktif.toLocaleString()}
							</TableCell>
						);
					case "jmlPasif":
						return (
							<TableCell align="right" key={index}>
								{data.totPasif.toLocaleString()}
							</TableCell>
						);
					case "jmlAktifPasif":
						return (
							<TableCell align="right" key={index}>
								{data.totRekening.toLocaleString()}
							</TableCell>
						);
					default:
						return (
							<TableCell align="right" key={index}>
								{convertToRupiah(data.totTagihan)}
							</TableCell>
						);
				}
			})}

*/
