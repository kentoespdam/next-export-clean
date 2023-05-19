import TableBody from "@mui/material/TableBody";
import { cabangList } from "@service/cabang";
import { useIkhtisarTahunanStore } from "@storage/ikhtisar.tahunan.store";
import { IkhtisarTahunanWilayahBodyBuilder } from "./Ikhtisar.tahunan.wilayah.body.builder";

const IkhtisarTahunanWilayahBody = () => {
	const formReq = useIkhtisarTahunanStore((state) => state.formReq);

	return (
		<TableBody>
			{cabangList.map((cabang) => {
				if (formReq?.kodeCabang === undefined)
					return (
						<IkhtisarTahunanWilayahBodyBuilder
							key={cabang.kodeCabang}
							cabang={cabang}
							kodeCabang={cabang.kodeCabang}
						/>
					);

				return (
					<IkhtisarTahunanWilayahBodyBuilder
						key={cabang.kodeCabang}
						cabang={cabang}
						kodeCabang={String(formReq?.kodeCabang)}
					/>
				);
			})}
		</TableBody>
	);
};

export default IkhtisarTahunanWilayahBody;
