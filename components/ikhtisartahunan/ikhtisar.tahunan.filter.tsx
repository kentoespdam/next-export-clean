import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import LoopOutlined from "@mui/icons-material/LoopOutlined";
import TuneOutlined from "@mui/icons-material/TuneOutlined";
import { AlertColor } from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { dataToBody, filterToRequest } from "../../helpers/fetch_helper";
import FetchService, { EReqMethod } from "../../service/Fetch.service";
import { useFilterDialogStore } from "../../storage/filter.dialog.store";
import { useIkhtisarTahunanStore } from "../../storage/ikhtisar.tahunan.store";
import FilterChip from "../template/filter/filter.chip";
import FilterDialog from "../template/filter/filter.dialog";
import Notif from "../template/notif";
import { IkhtisarTahunanTypes } from "./ikhtisar.tahunan.column";

const IkhtisarTahunanFilter = () => {
	const { filterOptions, toggleOpen, setTitle, setFilterOptions } =
		useFilterDialogStore();
	const { formReq, toggleLoading, setRequest, setPage } =
		useIkhtisarTahunanStore((state) => ({
			formReq: state.formReq,
			toggleLoading: state.toggleLoading,
			setRequest: state.setRequest,
			setPage: state.setPage,
		}));

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState(null);
	const [severity, setSeverity] = useState<AlertColor>("info");

	useEffect(() => {
		setTitle("Filter Ikhtisar Tahunan");
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		for (const [key, value] of Object.entries(formReq!)) {
			const index = IkhtisarTahunanTypes.map((item) => item.id).indexOf(
				key
			);
			IkhtisarTahunanTypes[index] = {
				...IkhtisarTahunanTypes[index],
				value: value,
			};
		}

		setFilterOptions(IkhtisarTahunanTypes);
	}, []);

	async function findHandler() {
		const abortController = new AbortController();
		const fromFilter = filterToRequest(filterOptions);
		const frmReq = {
			...formReq,
			...fromFilter,
		};

		toggleLoading();

		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(frmReq),
			url: "/api/ikhtisartahunan",
			signal: abortController.signal,
		});

		if (!request.ok) {
			toggleLoading();
			setMessage((await request.json()).errorMessage);
			setSeverity("error");
			setOpen(true);
			return;
		}

		const result = await request.json();
		toggleLoading();
		setRequest(frmReq);

		setPage(result);
		return () => abortController.abort();
	}

	async function downloadHandler() {
		return;
	}

	return (
		<Box>
			<Paper elevation={2} sx={{ p: 1, mb: 1 }}>
				<Grid container direction="row" spacing={1}>
					<Grid item xs={12} sx={{ mb: 1 }}>
						<Typography variant="h4">
							Data Ikhtisar Tahunan
						</Typography>
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
							onClick={downloadHandler}>
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
			</Paper>
			<Notif
				open={open}
				setOpen={setOpen}
				message={message}
				severity={severity}
			/>
		</Box>
	);
};

export default IkhtisarTahunanFilter;
