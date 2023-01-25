import { INotif } from "../components/template/notif";
import { useState } from "react";

export const responseErrorHandler = async (res: Response): Promise<INotif> => {
	const [open, setOpen] = useState(false);
	const resMessage = await res.json();

	setOpen(true);
	if (res.status === 400)
		return {
			open: open,
			message: resMessage.errorMessage,
			severity: "error",
			setOpen: setOpen,
		};

	return {
		open: open,
		message: resMessage.errorMessage,
		severity: "error",
		setOpen: setOpen,
	};
};
