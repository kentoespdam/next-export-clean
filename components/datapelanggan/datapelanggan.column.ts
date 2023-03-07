import { GridColDef } from "@mui/x-data-grid";
import { IPageRequest } from "../../helpers/common.interface";

export interface IDataPelanggan {
	noreg: string;
	wil: string;
	nosamw: string;
	nama: string;
	alamat: string;
	rt: string;
	rw: string;
	desa: string;
	kecamatan: string;
	jlw: string;
	urjlwp: string;
	statSmb: string;
	urstatSmb: string;
	tglPas: string;
}

export type IDataPelangganRequest = {
	noreg?: string;
	nosamw?: string;
	nama?: string;
	alamat?: string;
	tglPasang?: string;
	kodeGolongan?: string;
	statusSambung?: string;
} & IPageRequest;

export const DataPelangganColumn: GridColDef[] = [
	{
		field: "wil",
		headerName: "kode wilayah",
		filterable: false,
		sortable: false,
	},
	{
		field: "nosamw",
		headerName: "No Sambung",
		filterable: false,
		sortable: false,
	},
	{
		field: "nama",
		headerName: "Nama",
		filterable: false,
		sortable: false,
		width: 250,
	},
	{
		field: "alamat",
		headerName: "Alamat",
		filterable: false,
		sortable: false,
		width: 400,
	},
	{
		field: "rt",
		headerName: "RT",
		filterable: false,
		sortable: false,
		width: 40,
	},
	{
		field: "rw",
		headerName: "RW",
		filterable: false,
		sortable: false,
		width: 40,
	},
	{
		field: "desa",
		headerName: "Desa",
		filterable: false,
		sortable: false,
		width: 120,
	},
	{
		field: "kecamatan",
		headerName: "Kecamatan",
		filterable: false,
		sortable: false,
		width: 200,
	},
	{
		field: "jlw",
		headerName: "Jlw",
		filterable: false,
		sortable: false,
		width: 40,
	},
	{
		field: "urjlwp",
		headerName: "Urjlwp",
		filterable: false,
		sortable: false,
		width: 150,
	},
	{
		field: "statSmb",
		headerName: "stat Smb",
		filterable: false,
		sortable: false,
		width: 80,
	},
	{
		field: "urstatSmb",
		headerName: "status Sambungan",
		filterable: false,
		sortable: false,
		width: 150,
	},
	{
		field: "tglPas",
		headerName: "Tgl Pasang",
		filterable: false,
		sortable: false,
	},
];
