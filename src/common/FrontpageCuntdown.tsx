import { Grid, Paper, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';

const FrontpageCuntdown = () => {
	const [value, setValue] = useState<Date | null>(null);

	return (
		<div>
			<div className="mb-10">
				<Grid container spacing={10}>
					<Grid item xs={6}>
						<Paper elevation={1} className="px-8 pt-4 pb-6">
							<div className="text-lg mb-4">Active</div>
							<div className="mb-8">
								<div className="mb-3 font-bold">Image</div>
							</div>

							<div className="mb-4">
								<label
									htmlFor="file-input-1"
									className="inline-block py-2 text-sm px-5 rounded bg-site-1 text-white cursor-pointer"
								>
									Choose file
								</label>
								<input type="file" id="file-input-1" className="hidden" />
							</div>

							<div>
								<div>
									<TextField
										id="input-2"
										label="Image link"
										variant="filled"
										size="small"
										fullWidth={true}
									/>
								</div>
							</div>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper elevation={1} className="px-8 pt-4 pb-6">
							<div className="text-lg mb-4">Inactive</div>
							<div className="mb-8">
								<div className="mb-3 font-bold">Image</div>
							</div>

							<div className="mb-4">
								<label
									htmlFor="file-input-1"
									className="inline-block py-2 text-sm px-5 rounded bg-site-1 text-white cursor-pointer"
								>
									Choose file
								</label>
								<input type="file" id="file-input-1" className="hidden" />
							</div>

							<div>
								<div>
									<TextField
										id="input-2"
										label="Image link"
										variant="filled"
										size="small"
										fullWidth={true}
									/>
								</div>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</div>

			<div className="flex mb-12 gap-10">
				<div>
					<div className="mb-2">Active from</div>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label="from"
							value={value}
							onChange={(newValue) => {
								setValue(newValue);
							}}
							renderInput={(params) => (
								<TextField variant="filled" size={'small'} {...params} />
							)}
						/>
					</LocalizationProvider>
				</div>
				<div>
					<div className="mb-2">Active untill:</div>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label="till"
							value={value}
							onChange={(newValue) => {
								setValue(newValue);
							}}
							renderInput={(params) => (
								<TextField variant="filled" size={'small'} {...params} />
							)}
						/>
					</LocalizationProvider>
				</div>
			</div>
		</div>
	);
};

export default FrontpageCuntdown;
