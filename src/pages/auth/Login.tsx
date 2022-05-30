import { Copyright } from '@mui/icons-material';
import {
	Container,
	CssBaseline,
	Box,
	Avatar,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	Grid,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';

const Login = ({ signIn }: any) => {
	const [error, setError] = useState<boolean>(false);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		setError(false);

		if (data.get('email') === 'admin' && data.get('password') === 'admin') {
			signIn();
		} else {
			setError(true);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Username"
						name="email"
						autoComplete="email"
						size="small"
						autoFocus
						defaultValue={'admin'}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						size="small"
						autoComplete="current-password"
						defaultValue={'admin'}
					/>
					{error && (
						<div className="text-red-600 text-center mt-3">
							Wrong username / password
						</div>
					)}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign in
					</Button>
				</Box>
			</Box>

			<div className="flex items-center mt-4 justify-center">
				<Copyright sx={{ mx: 1 }} />
				{new Date().getFullYear()}. Lorem ipsum, dolor sit amet 
			</div>
		</Container>
	);
};

export default Login;
