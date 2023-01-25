"use client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { usePendapatanStore } from "../../storage/pendapatan.store";
import { IPendapatan, PendapatanColumn } from "./pendapatan.column";
import PendapatanToolbar from "./pendapatan.toolbar";
import PendapatanTotal from "./pendapatan.total";
import shallow from "zustand/shallow";
import SessClientHandler from "../../app/SessClientHandler";

const PendapatanComponent = () => {
	const isLoading = usePendapatanStore((state) => state.isLoading, shallow);
	const rows = usePendapatanStore((state) => state.rows, shallow);

	return (
		<SessClientHandler>
			<Box sx={{ width: "100%", mb: 1 }}>
				<PendapatanTotal />
			</Box>
			<Box sx={{ minHeight: "100vh" }}>
				<Paper elevation={2} sx={{ height: 700, width: "100%", p: 2 }}>
					<DataGrid
						getRowId={(row: IPendapatan) =>
							`${row.kodeGolongan}${row.kodeLokasi}`
						}
						columns={PendapatanColumn}
						rows={rows}
						pageSize={10}
						rowsPerPageOptions={[10, 25, 50, 100]}
						loading={isLoading}
						keepNonExistentRowsSelected
						components={{
							Toolbar: PendapatanToolbar,
						}}
					/>
				</Paper>
			</Box>
		</SessClientHandler>
	);
};

export default PendapatanComponent;
