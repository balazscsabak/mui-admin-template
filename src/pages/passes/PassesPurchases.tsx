import {
	Typography,
	Button,
	Divider,
	TextField,
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { useState } from 'react';
import { FaHashtag } from 'react-icons/fa';

const rows = [
	{
		status: 'Success',
		customerId: 'pisdgo93FSb7',
		date: format(new Date(), 'Y-MM-dd HH:mm:ss'),
		email: 'balazscsabak1313@gmail.com',
		firstname: 'John',
		lastname: 'Doe',
		passName: 'Csoportos 5 alkalom',
		price: 11990,
		valuta: 'HUF',
	},
	{
		status: 'Success',
		customerId: 'pisdgo93FSb7',
		date: format(new Date(), 'Y-MM-dd HH:mm:ss'),
		email: 'balazscsabak1313@gmail.com',
		firstname: 'John',
		lastname: 'Doe',
		passName: 'Csoportos 5 alkalom',
		price: 11990,
		valuta: 'HUF',
	},
	{
		status: 'Megszakítva',
		customerId: 'p628e1a133bcb7',
		date: format(new Date(), 'Y-MM-dd HH:mm:ss'),
		email: 'bala1313.blad@gmail.com',
		firstname: 'George',
		lastname: 'Fo',
		passName: 'Csoportos 5 alkalom',
		price: 11990,
		valuta: 'HUF',
	},
	{
		status: 'Success',
		customerId: 'pisdgo93FSb7',
		date: format(new Date(), 'Y-MM-dd HH:mm:ss'),
		email: 'balasakaas@gmail.com',
		firstname: 'Katie',
		lastname: 'John',
		passName: 'Csoportos 5 alkalom',
		price: 11990,
		valuta: 'HUF',
	},
	{
		status: 'Success',
		customerId: 'pisdgo93FSb7',
		date: format(new Date(), 'Y-MM-dd HH:mm:ss'),
		email: 'balazscsabak1313@gmail.com',
		firstname: 'John',
		lastname: 'Doe',
		passName: 'Csoportos 5 alkalom',
		price: 11990,
		valuta: 'HUF',
	},
];

const PassesPurchases = () => {
	const [value, setValue] = useState<Date | null>(null);

	const [age, setAge] = useState('');

	const handleChange = (event: any) => {
		setAge(event.target.value as string);
	};

	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">PURCHASES</Typography>
			</div>

			<Divider light sx={{ mt: 2, mb: 3 }} />

			<div className="flex justify-between mb-10">
				<div className="flex items-stretch">
					<TextField
						id="outlined-basic"
						label="search"
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

				<div className="flex items-center">
					<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth size={'small'}>
							<InputLabel id="demo-simple-select-label">Status</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Status"
								onChange={handleChange}
								variant="outlined"
								sx={{ mr: 2 }}
							>
								<MenuItem value={10}>All</MenuItem>
								<MenuItem value={20}>Success</MenuItem>
								<MenuItem value={30}>Error</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<div>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label="Start"
								value={value}
								onChange={(newValue) => {
									setValue(newValue);
								}}
								renderInput={(params) => (
									<TextField size={'small'} {...params} />
								)}
							/>
						</LocalizationProvider>
					</div>
					<div className="mx-2">-</div>
					<div>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label="End"
								value={value}
								onChange={(newValue) => {
									setValue(newValue);
								}}
								renderInput={(params) => (
									<TextField size={'small'} {...params} />
								)}
							/>
						</LocalizationProvider>
					</div>
				</div>
			</div>

			<div className="mb-4 flex items-center">
				<FaHashtag className="text-xs text-site-1 mr-2" />
				<span>Count: 5 PURCHASES</span>
			</div>

			<div className="mb-5">
				<Button size={'small'} variant={'contained'}>
					XLSX Generate
				</Button>
			</div>

			<div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Status</TableCell>
								<TableCell>ID</TableCell>
								<TableCell>Date</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Firstname</TableCell>
								<TableCell>Lastname</TableCell>
								<TableCell>Price</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, i) => (
								<TableRow
									key={i}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row.status}
									</TableCell>
									<TableCell>{row.customerId}</TableCell>
									<TableCell>{row.date}</TableCell>
									<TableCell>{row.email}</TableCell>
									<TableCell>{row.firstname}</TableCell>
									<TableCell>{row.lastname}</TableCell>
									<TableCell>{row.price}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
};

export default PassesPurchases;
