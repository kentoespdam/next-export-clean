import { GridColDef, GridValueFormatterParams } from "@mui/x-data-grid/";
import { convertToRupiah } from "../../helpers/object.formatter";

export interface IPendapatan {
	kodeGolongan: string;
	kodeSubGolongan: string;
	golongan: string;
	air: number;
	danaMeter: number;
	kodeLokasi: string;
	namaLokasi: string;
	kodeCabang: string;
	cabang: string;
}

export const PendapatanColumn: GridColDef[] = [
	{
		field: "kodeGolongan",
		headerName: "JLW",
		filterable: false,
		sortable: false,
	},
	{
		field: "kodeSubGolongan",
		headerName: "URJLW",
		filterable: false,
		sortable: false,
	},
	{
		field: "golongan",
		headerName: "URJLWP",
		filterable: false,
		sortable: false,
		width: 200,
	},
	{
		field: "air",
		headerName: "Air",
		filterable: false,
		sortable: false,
		width: 180,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "danaMeter",
		headerName: "Dana Meter",
		filterable: false,
		sortable: false,
		width: 180,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "kodeLokasi",
		headerName: "Kode Lokasi",
		filterable: false,
		sortable: false,
	},
	{
		field: "namaLokasi",
		headerName: "Nama Lokasi",
		filterable: false,
		sortable: false,
		width: 180,
	},
	{
		field: "kodeCabang",
		headerName: "KODE CABANG",
		filterable: false,
		sortable: false,
	},
	{
		field: "cabang",
		headerName: "CABANG",
		width: 200,
		filterable: false,
		sortable: false,
	},
];
