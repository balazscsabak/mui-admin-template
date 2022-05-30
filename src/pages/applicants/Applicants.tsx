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
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{
		name: 'Art',
		uv: 4,
	},
	{
		name: 'Body',
		uv: 3,
	},
	{
		name: 'Box',
		uv: 1,
	},
	{
		name: 'Spinning',
		uv: 0,
	},
	{
		name: 'Interval',
		uv: 2,
	},
	{
		name: 'Jump',
		uv: 0,
	},
	{
		name: 'Pilates',
		uv: 1,
	},
	{
		name: 'Step',
		uv: 2,
	},
	{
		name: 'Other',
		uv: 5,
	},
];

const Applicants = () => {
	const [value, setValue] = useState<Date | null>(null);
	const [age, setAge] = useState('');

	const handleChange = (event: any) => {
		setAge(event.target.value as string);
	};

	const rows = [
		{
			info: (
				<div>
					<div>Benett Nagy</div>
					<div className="text-sm opacity-70">062012412585</div>
					<div className="text-sm opacity-70">john.doe@gmail.com</div>
				</div>
			),
			classes: 'Body, Salsa Fitness',
			date: format(new Date(), 'Y-MM-dd HH:mm:ss'),
			status: (
				<div>
					<Box sx={{ minWidth: 230 }}>
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
								<MenuItem value={10}>Contact</MenuItem>
								<MenuItem value={20}>Waiting</MenuItem>
								<MenuItem value={30}>Closed</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</div>
			),
			desc: (
				<div>
					<TextField
						sx={{ fontSize: '12px !important' }}
						id="asdas"
						label="Description"
						multiline
						rows={2}
						size="small"
					/>
				</div>
			),
		},
		{
			info: (
				<div>
					<div>John Snow</div>
					<div className="text-sm opacity-70">0620452233585</div>
					<div className="text-sm opacity-70">john.doe@gmail.com</div>
				</div>
			),
			classes: 'Salsa Fitness',
			date: format(new Date(), 'Y-MM-dd HH:mm:ss'),
			status: (
				<div>
					<Box sx={{ minWidth: 230 }}>
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
								<MenuItem value={10}>Contact</MenuItem>
								<MenuItem value={20}>Waiting</MenuItem>
								<MenuItem value={30}>Closed</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</div>
			),
			desc: (
				<div>
					<TextField
						sx={{ fontSize: '12px !important' }}
						id="asdas"
						label="Description"
						multiline
						rows={2}
						size="small"
					/>
				</div>
			),
		},
		{
			info: (
				<div>
					<div>Katie Tailor</div>
					<div className="text-sm opacity-70">06204242125</div>
					<div className="text-sm opacity-70">john.doe@gmail.com</div>
				</div>
			),
			classes: 'Body, Salsa Fitness',
			date: format(new Date(), 'Y-MM-dd HH:mm:ss'),
			status: (
				<div>
					<Box sx={{ minWidth: 230 }}>
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
								<MenuItem value={10}>Contact</MenuItem>
								<MenuItem value={20}>Waiting</MenuItem>
								<MenuItem value={30}>Closed</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</div>
			),
			desc: (
				<div>
					<TextField
						sx={{ fontSize: '12px !important' }}
						id="asdas"
						label="Description"
						multiline
						rows={2}
						size="small"
					/>
				</div>
			),
		},
	];

	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">APPLICANTS</Typography>
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
								<MenuItem value={20}>Contact</MenuItem>
								<MenuItem value={30}>Waiting</MenuItem>
								<MenuItem value={30}>Closed</MenuItem>
							</Select>
						</FormControl>
					</Box>

					<div className="w-40">
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
					<div className="w-40">
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

			<div style={{ height: 400 }} className="mb-12 mt-16">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart width={730} height={250} data={data}>
						<Bar dataKey="uv" fill="#1976d2" />
						<XAxis dataKey="name" />
						<YAxis />
					</BarChart>
				</ResponsiveContainer>
			</div>

			<div className="mb-5 flex items-center">
				<FaHashtag className="text-xs text-site-1 mr-2" />
				<span>Összesen: 5 JELENTKEZŐ</span>
			</div>

			<div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Info</TableCell>
								<TableCell>Type</TableCell>
								<TableCell>Date</TableCell>
								<TableCell>Status</TableCell>
								<TableCell>Description</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, i) => (
								<TableRow
									key={i}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row.info}
									</TableCell>
									<TableCell>{row.classes}</TableCell>
									<TableCell>{row.date}</TableCell>
									<TableCell>{row.status}</TableCell>
									<TableCell>{row.desc}</TableCell>
									<TableCell>
										<Button variant="contained">Edit</Button>
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

export default Applicants;
