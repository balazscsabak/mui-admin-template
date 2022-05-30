import {
	Typography,
	Button,
	Divider,
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	TextField,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FaHashtag } from 'react-icons/fa';

const rows = [
	{
		name: 'John Doe',
		email: 'jogndoe@gmail.com',
		last: '9 days',
	},
	{
		name: 'Mark Thom',
		email: 'marhthomas@gmail.com',

		last: '1 year',
	},
	{
		name: 'Bran Dohn',
		email: 'jognd122oe@gmail.com',
		last: '1 days',
	},
	{
		name: 'Caitlyn Smith',
		email: 'cailtin@gmail.com',
		last: '3 days',
	},
	{
		name: 'John Doe',
		email: 'jogndoe@gmail.com',
		last: '9 days',
	},
	{
		name: 'Mark Thom',
		email: 'marhthomas@gmail.com',

		last: '1 year',
	},
	{
		name: 'Bran Dohn',
		email: 'jognd122oe@gmail.com',
		last: '1 days',
	},
	{
		name: 'Caitlyn Smith',
		email: 'cailtin@gmail.com',
		last: '3 days',
	},
	{
		name: 'John Doe',
		email: 'jogndoe@gmail.com',
		last: '9 days',
	},
	{
		name: 'Mark Thom',
		email: 'marhthomas@gmail.com',

		last: '1 year',
	},
	{
		name: 'Bran Dohn',
		email: 'jognd122oe@gmail.com',
		last: '1 days',
	},
	{
		name: 'Caitlyn Smith',
		email: 'cailtin@gmail.com',
		last: '3 days',
	},
];

const Users = () => {
	const [age, setAge] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">USERS</Typography>
				<div>
					<Button variant="contained" color="success" sx={{ ml: 2 }}>
						New user
					</Button>
				</div>
			</div>

			<Divider light sx={{ mt: 2, mb: 3 }} />

			<div className="mb-4 flex items-center">
				<FaHashtag className="text-xs text-site-1 mr-2" />
				<span>Count: {rows.length} USER</span>
			</div>

			<div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Username</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Last login</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									key={row.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell>{row.email}</TableCell>
									<TableCell>{row.last}</TableCell>
									<TableCell align="right">
										<Button
											color="warning"
											variant="contained"
											size="small"
											sx={{ mx: 1 }}
										>
											Inactivate
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
};

export default Users;
