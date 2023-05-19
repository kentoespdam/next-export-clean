"use client";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { GridToolbarContainer } from "@mui/x-data-grid/components";
import Button from "@mui/material/Button";
import LoopOutlined from "@mui/icons-material/LoopOutlined";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import TuneOutlined from "@mui/icons-material/TuneOutlined";
import { useFilterDialogStore } from "../../storage/filter.dialog.store";
import { SelectType, IPages } from "@helpers/common.interface";
import { useEffect } from "react";
import FilterChip from "@template/filter/filter.chip";
import FilterDialog from "@template/filter/filter.dialog";
import { IAngsuran, IAngsuranRequest } from "./angsuran.column";
import { useAngsuranStore } from "@storage/angsuran.store";
import FetchService, { EReqMethod } from "@service/Fetch.service";
import { dataToBody, filterToRequest } from "@helpers/fetch_helper";

const angsuranSelectTypes: SelectType[] = [
	{ id: "noreg", label: "No. Registrasi", type: "text" },
	{ id: "nosamw", label: "No. sambung", type: "text" },
	{ id: "unit", label: "Unit", type: "unit" },
	{ id: "kodeGolongan", label: "golongan", type: "golongan" },
	{ id: "nama", label: "nama", type: "text" },
	{ id: "alamat", label: "alamat", type: "text" },
	{ id: "tglBayar", label: "tglBayar", type: "text" },
	{ id: "tglBukti", label: "tglBukti", type: "text" },
	{ id: "status", label: "status", type: "text" },
	{ id: "tagihan", label: "tagihan", type: "text" },
];

const AngsuranToolbar = () => {
	const { filterOptions, toggleOpen, setTitle, setFilterOptions } =
		useFilterDialogStore();
	const angRequest = useAngsuranStore((state) => state.angRequest);
	const setRequest = useAngsuranStore((state) => state.setRequest);
	const toggleLoading = useAngsuranStore((state) => state.toggleLoading);
	const setPage = useAngsuranStore((state) => state.setPage);

	useEffect(() => {
		setTitle("Filter Angsuran");
		setFilterOptions(angsuranSelectTypes);
	}, []);

	const findHandler = async () => {
		const abortController = new AbortController();
		const fromFilter: IAngsuranRequest = filterToRequest(filterOptions);
		const angReq = {
			...fromFilter,
			pos: 0,
			limit: angRequest.limit,
			sortBy: angRequest.sortBy,
			sortDir: angRequest.sortDir,
		};

		toggleLoading();
		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(angReq),
			url: "/api/angsuran",
			signal: abortController.signal,
		});

		if (request.status === 401) {
			toggleLoading();
			return;
		}

		const result: IPages<IAngsuran> = await request.json();
		toggleLoading();
		if (result.contents.length === 0) {
			setPage(null);
			setRequest(angReq);
			return;
		}

		setPage(result);
		setRequest(angReq);
		return () => abortController.abort();
	};

	const exportHandler = async () => {
		const abortController = new AbortController();
		const fromFilter: IAngsuranRequest = filterToRequest(filterOptions);
		const angReq = {
			...fromFilter,
			pos: 0,
			limit: angRequest.limit,
			sortBy: angRequest.sortBy,
			sortDir: angRequest.sortDir,
		};

		toggleLoading();
		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(angReq),
			url: "/api/angsuran/export",
			signal: abortController.signal,
		});

		if (request.status === 401) {
			toggleLoading();
			return;
		}

		const result: IPages<IAngsuran> = await request.json();
		toggleLoading();
		if (result.contents.length === 0) {
			setPage(null);
			setRequest(angReq);
			return;
		}

		setPage(result);
		setRequest(angReq);
		return () => abortController.abort();
	};

	return (
		<GridToolbarContainer sx={{ m: 1 }}>
			<Grid container direction="row" spacing={1}>
				<Grid item xs={12} sx={{ mb: 1 }}>
					<Typography variant="h4">Data Angsuran</Typography>
					<Divider />
				</Grid>
				<Grid item lg={12}>
					<Button
						variant="outlined"
						size="small"
						startIcon={<TuneOutlined />}
						sx={{ mr: 1 }}
						onClick={toggleOpen}>
						Filter
					</Button>
					<Button
						startIcon={<LoopOutlined />}
						variant="outlined"
						size="small"
						sx={{ mr: 1 }}
						onClick={findHandler}>
						FIND
					</Button>
					<Button
						startIcon={<DownloadOutlined />}
						variant="outlined"
						size="small"
						sx={{ mr: 1 }}
						onClick={exportHandler}>
						Excel
					</Button>
				</Grid>
				<Grid item lg={12}>
					<FilterChip />
				</Grid>
				<Grid item lg={12}>
					<Divider />
				</Grid>
			</Grid>
			<FilterDialog />
		</GridToolbarContainer>
	);
};

export default AngsuranToolbar;
