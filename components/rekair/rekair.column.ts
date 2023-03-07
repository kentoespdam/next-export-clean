import { SelectType, IPageRequest } from "../../helpers/common.interface";
import { GridColDef } from "@mui/x-data-grid/models";

export type IRekairRequest = {
	kodeCabang?: string;
	kodeUnit?: string;
	periode?: number;
	tglBukti?: string;
	nosamw?: string;
	nama?: string;
	alamat?: string;
	kodeGolongan?: string;
	golongan?: string;
	kodeSambung?: string;
	statRekening?: string;
	loketkol?: string;
	noBukti?: string;
	tglCetak?: string;
	tagihan?: number;
} & IPageRequest;

export const IRekairTypes: SelectType[] = [
	{ id: "kodeCabang", label: "Kode Cabang", type: "cabang" },
	{ id: "kodeUnit", label: "Kode Unit", type: "unit" },
	{ id: "periode", label: "Periode", type: "text" },
	{ id: "tglBukti", label: "Tgl Bukti", type: "text" },
	{ id: "nosamw", label: "No Sambung", type: "text" },
	{ id: "nama", label: "Nama", type: "text" },
	{ id: "alamat", label: "Alamat", type: "text" },
	{ id: "kodeGolongan", label: "Kode Golongan", type: "golongan" },
	{ id: "golongan", label: "Golongan", type: "text" },
	{ id: "kodeSambung", label: "Kode Sambung", type: "text" },
	{ id: "statRekening", label: "Stat Rekening", type: "text" },
	{ id: "loketkol", label: "Loket Kolektif", type: "text" },
	{ id: "noBukti", label: "No Bukti", type: "text" },
	{ id: "tglCetak", label: "Tgl Cetak", type: "text" },
	{ id: "tagihan", label: "Tagihan", type: "text" },
];

export interface IRekair {
	noBukti: string;
	tglBukti: string;
	noSambung: string;
	unit: string;
	cabang: string;
	nama: string;
	alamat: string;
	noblth: string;
	golongan: string;
	metLalu: number;
	metKini: number;
	totalPakai: number;
	rata2: number;
	statusSambung: string;
	periode: number;
	loketBayar: string;
	danaMeter: number;
	diameter: string;
	minm3: number;
	adm: number;
	ret: number;
	r1: number;
	r2: number;
	r3: number;
	r4: number;
	tarif1: number;
	tarif2: number;
	tarif3: number;
	tarif4: number;
	pakai1: number;
	pakai2: number;
	pakai3: number;
	pakai4: number;
	denda: number;
	bTutup: number;
	angSambung: number;
	angAir: number;
	jasaSambung: number;
	jangSambung: number;
	angSbke: number;
	angSbso: number;
	materai: number;
	tagihan: number;
	operator: string;
	tglByr: string;
	noByr: string;
	ket: string;
	kolektif: string;
}

export const RekairColumn: GridColDef[] = [
	{
		field: "noBukti",
		headerName: "No Bukti",
		filterable: false,
		sortable: false,
	},
	{
		field: "tglBukti",
		headerName: "Tgl Bukti",
		filterable: false,
		sortable: false,
	},
	{
		field: "noSambung",
		headerName: "No Sambung",
		filterable: false,
		sortable: false,
	},
	{ field: "unit", headerName: "Unit", filterable: false, sortable: false },
	{
		field: "cabang",
		headerName: "Canang",
		filterable: false,
		sortable: false,
	},
	{ field: "nama", headerName: "Nama", filterable: false, sortable: false },
	{
		field: "alamat",
		headerName: "Alamat",
		filterable: false,
		sortable: false,
	},
	{
		field: "noblth",
		headerName: "No BLTH",
		filterable: false,
		sortable: false,
	},
	{
		field: "golongan",
		headerName: "Golongan",
		filterable: false,
		sortable: false,
	},
	{
		field: "metLalu",
		headerName: "Meter Lalu",
		filterable: false,
		sortable: false,
	},
	{
		field: "metKini",
		headerName: "Meter Kini",
		filterable: false,
		sortable: false,
	},
	{
		field: "totalPakai",
		headerName: "Total Pakai",
		filterable: false,
		sortable: false,
	},
	{ field: "rata2", headerName: "Rata2", filterable: false, sortable: false },
	{
		field: "statusSambung",
		headerName: "Status Sambung",
		filterable: false,
		sortable: false,
	},
	{
		field: "periode",
		headerName: "Periode",
		filterable: false,
		sortable: false,
	},
	{
		field: "loketBayar",
		headerName: "Loket Bayar",
		filterable: false,
		sortable: false,
	},
	{
		field: "danaMeter",
		headerName: "Dana Meter",
		filterable: false,
		sortable: false,
	},
	{
		field: "diameter",
		headerName: "Diameter",
		filterable: false,
		sortable: false,
	},
	{
		field: "minm3",
		headerName: "Minimal m3",
		filterable: false,
		sortable: false,
	},
	{ field: "adm", headerName: "Adm", filterable: false, sortable: false },
	{
		field: "ret",
		headerName: "Retribusi",
		filterable: false,
		sortable: false,
	},
	{ field: "r1", headerName: "R1", filterable: false, sortable: false },
	{ field: "r2", headerName: "R2", filterable: false, sortable: false },
	{ field: "r3", headerName: "R3", filterable: false, sortable: false },
	{ field: "r4", headerName: "R4", filterable: false, sortable: false },
	{
		field: "tarif1",
		headerName: "Tarif 1",
		filterable: false,
		sortable: false,
	},
	{
		field: "tarif2",
		headerName: "Tarif 2",
		filterable: false,
		sortable: false,
	},
	{
		field: "tarif3",
		headerName: "Tarif 3",
		filterable: false,
		sortable: false,
	},
	{
		field: "tarif4",
		headerName: "Tarif 4",
		filterable: false,
		sortable: false,
	},
	{
		field: "pakai1",
		headerName: "Pakai 1",
		filterable: false,
		sortable: false,
	},
	{
		field: "pakai2",
		headerName: "Pakai 2",
		filterable: false,
		sortable: false,
	},
	{
		field: "pakai3",
		headerName: "Pakai 3",
		filterable: false,
		sortable: false,
	},
	{
		field: "pakai4",
		headerName: "Pakai 4",
		filterable: false,
		sortable: false,
	},
	{ field: "denda", headerName: "Denda", filterable: false, sortable: false },
	{
		field: "bTutup",
		headerName: "Biaya Tutup",
		filterable: false,
		sortable: false,
	},
	{
		field: "angSambung",
		headerName: "Angsuran Sambung",
		filterable: false,
		sortable: false,
	},
	{
		field: "angAir",
		headerName: "Angsuran Air",
		filterable: false,
		sortable: false,
	},
	{
		field: "jasaSambung",
		headerName: "Jasa Sambung",
		filterable: false,
		sortable: false,
	},
	{
		field: "jangSambung",
		headerName: "Jang Sambung",
		filterable: false,
		sortable: false,
	},
	{
		field: "angSbke",
		headerName: "Angsuran Sambung Ke",
		filterable: false,
		sortable: false,
	},
	{
		field: "angSbso",
		headerName: "Angsuran SBSO",
		filterable: false,
		sortable: false,
	},
	{
		field: "materai",
		headerName: "Materai",
		filterable: false,
		sortable: false,
	},
	{
		field: "tagihan",
		headerName: "Tagihan",
		filterable: false,
		sortable: false,
	},
	{
		field: "operator",
		headerName: "Operator",
		filterable: false,
		sortable: false,
	},
	{
		field: "tglByr",
		headerName: "Tgl Bayar",
		filterable: false,
		sortable: false,
	},
	{
		field: "noByr",
		headerName: "No Bayar",
		filterable: false,
		sortable: false,
	},
	{ field: "ket", headerName: "Ket", filterable: false, sortable: false },
	{
		field: "kolektif",
		headerName: "Kolektif",
		filterable: false,
		sortable: false,
	},
];
