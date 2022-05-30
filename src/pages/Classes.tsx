import {
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Divider,
	TextField,
	Typography,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { FaHashtag } from 'react-icons/fa';

const rows = [
	{
		name: 'Ipsum dolor sit amet consectetur',
		difficulty: true,
		file: '-',
	},
	{
		name: 'Lorem ipsum dolor sit amet',
		difficulty: true,
		file: '-',
	},
	{
		name: 'Sit amet ipsum',
		difficulty: false,
		file: '-',
	},
	{
		name: 'Ipsum dolor sit amet consectetur',
		difficulty: true,
		file: '-',
	},
	{
		name: 'Lorem ipsum dolor sit amet',
		difficulty: true,
		file: '-',
	},
	{
		name: 'Sit amet ipsum',
		difficulty: true,
		file: '-',
	},
	{
		name: 'Ipsum dolor sit amet consectetur',
		difficulty: false,
		file: '-',
	},
	{
		name: 'Lorem ipsum dolor sit amet',
		difficulty: false,
		file: '-',
	},
	{
		name: 'Sit amet ipsum',
		difficulty: true,
		file: '-',
	},
];

const Classes = () => {
	const [age, setAge] = useState('');

	const handleChange = (event: any) => {
		setAge(event.target.value as string);
	};

	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">CLASSES</Typography>
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
			</div>

			<div className="mb-4 flex items-center">
				<FaHashtag className="text-xs text-site-1 mr-2" />
				<span>Összesen: 9 CLASSES</span>
			</div>

			<div className="mb-5">
				<Button size={'small'} variant={'contained'}>
					XLSX GENERATE
				</Button>
			</div>

			<div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Title</TableCell>
								<TableCell>Difficulty</TableCell>
								<TableCell>File</TableCell>
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
										{row.name}
									</TableCell>
									<TableCell>
										{row.difficulty ? (
											<CircleIcon color="warning" />
										) : (
											<CircleIcon color="success" />
										)}
									</TableCell>
									<TableCell>{row.file}</TableCell>
									<TableCell align="right">
										<Button color="primary" variant="contained" size="small">
											Edit
										</Button>
										<Button
											color="warning"
											variant="contained"
											size="small"
											sx={{ ml: 1 }}
										>
											Deactivate
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

export default Classes;
