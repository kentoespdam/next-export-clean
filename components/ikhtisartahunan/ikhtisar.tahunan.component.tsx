"use client";
import Box from "@mui/material/Box";
import SessClientHandler from "@app/SessClientHandler";
import IkhtisarTahunanFilter from "./ikhtisar.tahunan.filter";
import IkhtisarTahunanTabComponent from "./ikhtisar.tahunan.tab.component";

const IkhtisarTahunanComponent = () => {
	return (
		<SessClientHandler>
			<Box>
				<IkhtisarTahunanFilter />
				<IkhtisarTahunanTabComponent />
			</Box>
		</SessClientHandler>
	);
};

export default IkhtisarTahunanComponent;
