import { useBillingStore } from "@storage/billing.store";
import TableBody from "@mui/material/TableBody";
import { cabangList } from "@service/cabang";
import LainnyaDiameterRowGroupBuilder from "./lainnya.diameter.group.builder";

const LainnyaDiameterBody = () => {
	const rows = useBillingStore((state) => state.page?.unitUkmetDataList);

	return rows === undefined ? null : (
		<TableBody>
			{cabangList.map((cabang) => (
				<LainnyaDiameterRowGroupBuilder
					key={cabang.kodeCabang}
					satker={cabang}
					rows={rows}
				/>
			))}
		</TableBody>
	);
};

export default LainnyaDiameterBody;
