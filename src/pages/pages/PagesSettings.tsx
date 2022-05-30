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
		name: 'Test',
		end: 'false',
		pageEnd: '2015.09.30. 20:00 Max: 5',
		subs: 4,
	},
	{
		name: 'Test2',
		end: 'false',
		pageEnd: '2015.09.25. 140:00 Max: 6',
		subs: 4,
	},
];

const PagesSettings = () => {
	const [age, setAge] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">PAGES</Typography>
				<div>
					<Button variant="contained" color="success" sx={{ ml: 2 }}>
						New page
					</Button>
				</div>
			</div>

			<Divider light sx={{ mt: 2, mb: 3 }} />

			<div className="mb-4 flex items-center">
				<FaHashtag className="text-xs text-site-1 mr-2" />
				<span>Count: {rows.length} PAGE</span>
			</div>

			<div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Title</TableCell>
								<TableCell>End</TableCell>
								<TableCell>End Date</TableCell>
								<TableCell>Subscribers</TableCell>
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
									<TableCell>{row.end}</TableCell>
									<TableCell>{row.pageEnd}</TableCell>
									<TableCell>{row.subs}</TableCell>
									<TableCell align="right">
										<Button
											sx={{ mr: 2 }}
											color="primary"
											variant="contained"
											size="small"
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

export default PagesSettings;
