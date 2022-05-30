import { Typography, Divider, TextField, Button } from '@mui/material';

const PasswordManager = () => {
	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">Manager</Typography>
			</div>

			<Divider light sx={{ mt: 2, mb: 3 }} />

			<div className="flex justify-between mb-10">
				<div className="flex items-stretch">
					<TextField
						id="outlined-basic"
						label="data"
						variant="outlined"
						size="small"
					/>
					<Button
						sx={{
							ml: 1,
						}}
						variant={'contained'}
					>
						Search
					</Button>
				</div>
			</div>

			<div className="text-center mt-8">No data found.</div>
		</div>
	);
};

export default PasswordManager;
