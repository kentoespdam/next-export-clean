import { useBillingStore } from "../../../../../storage/billing.store";
import TableBody from "@mui/material/TableBody";
import { cabangList } from "../../../../../service/cabang";
import LainnyaWilayahGroupBuilder from "./lainnya.wilayah.group.builder";

const LainnyaWilayahBody = () => {
	const rows = useBillingStore((state) => state.page?.unitGolonganDataList);

	return rows === undefined ? null : (
		<TableBody>
			{cabangList.map((cabang) => (
				<LainnyaWilayahGroupBuilder
					key={cabang.kodeCabang}
					cabang={cabang}
					rows={rows}
				/>
			))}
		</TableBody>
	);
};

export default LainnyaWilayahBody;
