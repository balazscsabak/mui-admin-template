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
		name: 'Amet consectetur adipisicing elit',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam!',
	},
	{
		name: 'Consectetur adipisicing dolor',
		desc: 'Sit amet consectetur adipisicing elit dolor . Neque, magnam!',
	},
	{
		name: 'Amet consectetur adipisicing elit',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam!',
	},
	{
		name: 'Consectetur adipisicing dolor',
		desc: 'Sit amet consectetur adipisicing elit dolor . Neque, magnam!',
	},
	{
		name: 'Amet consectetur adipisicing elit',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam!',
	},
	{
		name: 'Consectetur adipisicing dolor',
		desc: 'Sit amet consectetur adipisicing elit dolor . Neque, magnam!',
	},
	{
		name: 'Amet consectetur adipisicing elit',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam!',
	},
	{
		name: 'Consectetur adipisicing dolor',
		desc: 'Sit amet consectetur adipisicing elit dolor . Neque, magnam!',
	},
	{
		name: 'Amet consectetur adipisicing elit',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam!',
	},
	{
		name: 'Consectetur adipisicing dolor',
		desc: 'Sit amet consectetur adipisicing elit dolor . Neque, magnam!',
	},
	{
		name: 'Amet consectetur adipisicing elit',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam!',
	},
	{
		name: 'Consectetur adipisicing dolor',
		desc: 'Sit amet consectetur adipisicing elit dolor . Neque, magnam!',
	},
];

const PassesList = () => {
	const [age, setAge] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">PASSES</Typography>
				<div>
					<Button variant="contained" color="success" sx={{ ml: 2 }}>
						New pass
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
				<div>
					<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth size={'small'}>
							<InputLabel id="demo-simple-select-label">Status</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Státusz"
								onChange={handleChange}
							>
								<MenuItem value={10}>All</MenuItem>
								<MenuItem value={20}>Active</MenuItem>
								<MenuItem value={30}>Inactive</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</div>
			</div>

			<div className="mb-4 flex items-center">
				<FaHashtag className="text-xs text-site-1 mr-2" />
				<span>Count: {rows.length} PASS</span>
			</div>

			<div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Title</TableCell>
								<TableCell>Description</TableCell>
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
									<TableCell>{row.desc}</TableCell>
									<TableCell align="right">
										<Button color="primary" variant="contained" size="small">
											Edit
										</Button>
										<Button
											color="warning"
											variant="contained"
											size="small"
											sx={{ mx: 1 }}
										>
											Deactivate
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

export default PassesList;
