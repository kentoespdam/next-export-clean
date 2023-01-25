"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { GridToolbarContainer } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import periodeHelper from "../../helpers/periode.helper";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoopOutlined from "@mui/icons-material/LoopOutlined";
import DownloadOutlined from "@mui/icons-material/DownloadDoneOutlined";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useRef } from "react";
import {
	IPendapatanRequest,
	usePendapatanStore,
} from "../../storage/pendapatan.store";
import shallow from "zustand/shallow";
import FetchService, { EReqMethod } from "../../service/Fetch.service";

const PendapatanToolbar = () => {
	const periodeAwalRef = useRef<HTMLInputElement>(null);
	const periodeAkhirRef = useRef<HTMLInputElement>(null);
	const toTglRef = useRef<HTMLInputElement>(null);

	const { periodeAwal, setPeriodeAwal } = usePendapatanStore(
		(state) => ({
			periodeAwal: state.periodeAwal,
			setPeriodeAwal: state.setPeriodeAwal,
		}),
		shallow
	);
	const { periodeAkhir, setPeriodeAkhir } = usePendapatanStore(
		(state) => ({
			periodeAkhir: state.periodeAkhir,
			setPeriodeAkhir: state.setPeriodeAkhir,
		}),
		shallow
	);

	const { toTgl, setToTgl } = usePendapatanStore(
		(state) => ({
			toTgl: state.toTgl,
			setToTgl: state.setToTgl,
		}),
		shallow
	);
	const toggleLoading = usePendapatanStore(
		(state) => state.toggleLoading,
		shallow
	);
	const setRows = usePendapatanStore((state) => state.setRows, shallow);

	const handleChange = (e: SelectChangeEvent) => {
		switch (e.target.name) {
			case "periodeAwal":
				setPeriodeAwal(e.target.value);
				break;
			case "periodeAkhir":
				setPeriodeAkhir(e.target.value);
				break;
		}
	};

	const findPendapatan = async () => {
		toggleLoading();
		const data: IPendapatanRequest = {
			fromPeriode: String(periodeAwalRef.current?.value),
			toPeriode: String(periodeAkhirRef.current?.value),
			toTgl: String(toTglRef.current?.value),
		};

		if (parseInt(data.fromPeriode) > parseInt(data.toPeriode)) {
			alert(
				"periode awal harus lebih kecil / sama dengan periode akhir!!!"
			);
			return;
		}

		const abortController = new AbortController();
		const options = {
			method: EReqMethod.POST,
			externalApi: false,
			body: data,
			url: "/api/pendapatan",
			signal: abortController.signal,
		};

		const request = await FetchService.requestGenerator(options);
		toggleLoading();
		if (request.status === 401) return;

		const result = await request.json();
		setRows(result);
	};

	const downloadHandler = () => {
		const abortController = new AbortController();
		const data: IPendapatanRequest = {
			fromPeriode: String(periodeAwalRef.current?.value),
			toPeriode: String(periodeAkhirRef.current?.value),
			toTgl: String(toTglRef.current?.value),
		};
		toggleLoading();
		try {
			let filename = "";
			FetchService.requestGenerator({
				method: EReqMethod.POST,
				externalApi: false,
				url: "/api/pendapatan/export",
				body: data,
				signal: abortController.signal,
			})
				.then((res) => {
					if (res.status === 401) {
						toggleLoading();
						throw new Error(res.statusText);
					}

					const headers: Headers = res.headers;
					filename = (
						headers.get("Content-Disposition") || ""
					).replace("attachment; filename=", "");
					console.log(filename);
					return res.blob();
				})
				.then((blob) => {
					if (blob === undefined)
						throw new Error("Failed getting file");
					const url = window.URL.createObjectURL(blob);
					const a = document.createElement("a");
					a.href = url;
					a.download = filename;
					document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
					a.click();
					a.remove();
				})
				.catch((e) => {
					toggleLoading();
					console.log(e);
				})
				.finally(() => {
					toggleLoading();
				});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<GridToolbarContainer sx={{ width: "100%" }}>
				<Grid
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					spacing={1}
					sx={{ p: 1 }}>
					<Grid item lg={2} sm={3} xs={12}>
						<FormControl variant="outlined" fullWidth>
							<InputLabel htmlFor="periodeAwal">
								Periode Awal
							</InputLabel>
							<Select
								label="Periode Awal"
								labelId="periodeAwal"
								name="periodeAwal"
								size="small"
								inputRef={periodeAwalRef}
								value={periodeAwal}
								onChange={handleChange}>
								{periodeHelper.getListPeriode().map((item) => (
									<MenuItem
										key={item.periode}
										value={item.periode}>
										{item.periode}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item lg={2} sm={3} xs={12}>
						<FormControl variant="outlined" fullWidth>
							<InputLabel htmlFor="periodeAkhir">
								Periode Akhir
							</InputLabel>
							<Select
								label="Periode Akhir"
								labelId="periodeAkhir"
								name="periodeAkhir"
								size="small"
								inputRef={periodeAkhirRef}
								value={periodeAkhir}
								onChange={handleChange}>
								{periodeHelper.getListPeriode().map((item) => (
									<MenuItem
										key={item.periode}
										value={item.periode}>
										{item.periode}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item lg={2} sm={3} xs={12}>
						<FormControl variant="standard" fullWidth>
							<DesktopDatePicker
								label="Sampai Tanggal"
								inputFormat="YYYY-MM-DD"
								value={toTgl}
								onChange={(e) => setToTgl(dayjs(e))}
								inputRef={toTglRef}
								closeOnSelect
								renderInput={(params) => (
									<TextField size="small" {...params} />
								)}
							/>
						</FormControl>
					</Grid>
					<Grid item lg={3} xs={12} sx={{ mb: 1 }}>
						<Button
							startIcon={<LoopOutlined />}
							variant="outlined"
							size="small"
							sx={{ ml: 1 }}
							onClick={findPendapatan}>
							<Typography>FIND</Typography>
						</Button>

						<Button
							startIcon={<DownloadOutlined />}
							variant="outlined"
							size="small"
							sx={{ ml: 1 }}
							onClick={downloadHandler}>
							<Typography>Excel</Typography>
						</Button>
					</Grid>
				</Grid>
			</GridToolbarContainer>
			<Divider />
		</LocalizationProvider>
	);
};

export default PendapatanToolbar;
