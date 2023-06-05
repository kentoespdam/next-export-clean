import { GridColDef } from "@mui/x-data-grid";
import { IPageRequest } from "@helpers/common.interface";

export interface IDataPelanggan {
	noreg: string;
	wilayah: string;
	nosamw: string;
	nama: string;
	alamat: string;
	rt: string;
	rw: string;
	desa: string;
	kecamatan: string;
	kodeGolongan: string;
	golongan: string;
	kodeStatusSambung: string;
	statusSambung: string;
	tanggalPasang: string;
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
		field: "wilayah",
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
		field: "kodeGolongan",
		headerName: "Jlw",
		filterable: false,
		sortable: false,
		width: 40,
	},
	{
		field: "golongan",
		headerName: "Urjlwp",
		filterable: false,
		sortable: false,
		width: 150,
	},
	{
		field: "kodeStatusSambung",
		headerName: "stat Smb",
		filterable: false,
		sortable: false,
		width: 80,
	},
	{
		field: "statusSambung",
		headerName: "status Sambungan",
		filterable: false,
		sortable: false,
		width: 150,
	},
	{
		field: "tanggalPasang",
		headerName: "Tgl Pasang",
		filterable: false,
		sortable: false,
	},
];
