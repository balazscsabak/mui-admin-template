import {
	Typography,
	Button,
	Divider,
	TextField,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { useState } from 'react';
import { FaHashtag } from 'react-icons/fa';

const rows = [
	{
		name: 'Amet consectetur adipisicing elit',
		start: format(new Date(), 'Y-MM-dd'),
		end: format(new Date(), 'Y-MM-dd'),
	},
	{
		name: 'Ipsum dolor sit amet consectetur',
		start: format(new Date(), 'Y-MM-dd'),
		end: format(new Date(), 'Y-MM-dd'),
	},
	{
		name: 'Amet consectetur adipisicing elit',
		start: format(new Date(), 'Y-MM-dd'),
		end: format(new Date(), 'Y-MM-dd'),
	},
	{
		name: 'Ipsum dolor sit amet consectetur',
		start: format(new Date(), 'Y-MM-dd'),
		end: format(new Date(), 'Y-MM-dd'),
	},
	{
		name: 'Amet consectetur adipisicing elit',
		start: format(new Date(), 'Y-MM-dd'),
		end: format(new Date(), 'Y-MM-dd'),
	},
	{
		name: 'Ipsum dolor sit amet consectetur',
		start: format(new Date(), 'Y-MM-dd'),
		end: format(new Date(), 'Y-MM-dd'),
	},
	{
		name: 'Amet consectetur adipisicing elit',
		start: format(new Date(), 'Y-MM-dd'),
		end: format(new Date(), 'Y-MM-dd'),
	},
	{
		name: 'Ipsum dolor sit amet consectetur',
		start: format(new Date(), 'Y-MM-dd'),
		end: format(new Date(), 'Y-MM-dd'),
	},
];

const PassesSales = () => {
	const [value, setValue] = useState<Date | null>(null);

	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">PASS SALES </Typography>
				<div>
					<Button variant="contained" color="success" sx={{ ml: 2 }}>
						New Sale
					</Button>
				</div>
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
					<div>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label="From"
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
								label="Till"
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
				<span>Count: 9 SALE</span>
			</div>

			<div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Title</TableCell>
								<TableCell>Start</TableCell>
								<TableCell>End</TableCell>
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
									<TableCell>{row.start}</TableCell>
									<TableCell>{row.end}</TableCell>
									<TableCell align="right">
										<Button
											color="primary"
											variant="contained"
											size="small"
											sx={{ mr: 2 }}
										>
											Edit
										</Button>

										<Button color="error" variant="contained" size="small">
											Delete
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

export default PassesSales;
