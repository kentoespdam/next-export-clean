"use client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import SessClientHandler from "@app/SessClientHandler";
import { useRekairStore } from "../../storage/rekair.store";
import { RekairColumn } from "./rekair.column";
import RekairToolbar from "./rekair.toolbar";
import RekairFooter from "./rekair.footer";

const RekairComponent = () => {
	const { isLoading, page } = useRekairStore((state) => ({
		isLoading: state.isLoading,
		page: state.page,
	}));
	const rows = page === null ? [] : page.contents;
	return (
		<SessClientHandler>
			<Box sx={{ minHeight: "100vh" }}>
				<Paper elevation={2} sx={{ height: 700, width: "100%", p: 2 }}>
					<DataGrid
						getRowId={(row) => `${row.noBukti}${row.noblth}`}
						columns={RekairColumn}
						rows={rows}
						loading={isLoading}
						components={{
							Toolbar: RekairToolbar,
							Footer: RekairFooter,
						}}
					/>
				</Paper>
			</Box>
		</SessClientHandler>
	);
};

export default RekairComponent;
