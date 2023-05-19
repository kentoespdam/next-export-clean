import TableBody from "@mui/material/TableBody";
import { useIkhtisarTahunanStore } from "@storage/ikhtisar.tahunan.store";
import { golonganList } from "@service/golongan";
import IkhtisarTahunanGolonganBodyBuilder from "./ikhtisar.tahunan.golongan.body.builder";

const IkhtisarTahunanGolonganBody = () => {
	const formReq = useIkhtisarTahunanStore((state) => state.formReq);

	return (
		<TableBody>
			{golonganList.map((golongan) => {
				if (formReq?.kodeCabang === undefined)
					return (
						<IkhtisarTahunanGolonganBodyBuilder
							key={golongan.kodeGolongan}
							golongan={golongan}
							kodeGolongan={golongan.kodeGolongan}
						/>
					);

				return (
					<IkhtisarTahunanGolonganBodyBuilder
						key={golongan.kodeGolongan}
						golongan={golongan}
						kodeGolongan={String(formReq?.kodeGolongan)}
					/>
				);
			})}
		</TableBody>
	);
};

export default IkhtisarTahunanGolonganBody;
