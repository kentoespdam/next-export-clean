"use client";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HeaderAccount from "./header.account";
import { useRootStore } from "../../storage/rootStore";
import shallow from "zustand/shallow";

const HeaderComponent = () => {
	const toggleMenu = useRootStore((state) => state.toggleMenu, shallow);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="Main Menu"
						sx={{ mr: 2 }}
						onClick={toggleMenu}
					>
						<MenuIcon />
					</IconButton>

					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Perumdam Tirta Satria
					</Typography>
					<HeaderAccount />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default HeaderComponent;
