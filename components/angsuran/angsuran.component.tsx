"use client";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { AngsuranColumn, IAngsuran } from "./angsuran.column";
import AngsuranToolbar from "./angsuran.toolbar";
import { useAngsuranStore } from "../../storage/angsuran.store";
import AngsuranFooter from "./angsuran.footer";
import SessClientHandler from "../../app/SessClientHandler";

const AngsuranComponent = () => {
	const store = useAngsuranStore();
	const rows: IAngsuran[] = store.page === null ? [] : store.page.contents;
	const isLoading = store.isLoading;

	return (
		<SessClientHandler>
			<Box sx={{ minHeight: "100vh" }}>
				<Paper elevation={2} sx={{ height: 700, width: "100%", p: 2 }}>
					<DataGrid
						getRowId={(row: IAngsuran) =>
							`${row.noBukti}${row.noblth}${row.angsKe}${row.noByr}`
						}
						columns={AngsuranColumn}
						rows={rows}
						loading={isLoading}
						components={{
							Toolbar: AngsuranToolbar,
							Footer: AngsuranFooter,
						}}
					/>
				</Paper>
			</Box>
		</SessClientHandler>
	);
};

export default AngsuranComponent;
