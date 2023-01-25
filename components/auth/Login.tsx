"use client";
import { ThemeProvider } from "@mui/material/styles";
import { useRootStore } from "../../storage/rootStore";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { useRouter } from "next/navigation";
import FetchService, { EReqMethod } from "../../service/Fetch.service";

const Login = () => {
	const theme = useRootStore((state) => state.theme);

	const router = useRouter();
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const response = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: {
				username: data.get("username"),
				password: data.get("password"),
			},
			url: "/api/auth",
		});

		if (response.status === 202) {
			if (location.pathname.startsWith("/")) router.push("/dashboard");

			router.refresh();
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlined />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>

					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={
								<Checkbox value="remember" color="primary" />
							}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Login;
