import { Paper, TextField } from '@mui/material';

const FrontpageImage = () => {
	return (
		<Paper elevation={1} className="px-8 pt-4 pb-6">
			<div className="text-lg mb-4">Ipsum dolor sit amet consectetur </div>
			<div className="mb-8">
				<div className="mb-3 font-bold">Image</div>
				<img
					className="rounded-lg bordered-img"
					src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				/>
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
	);
};

export default FrontpageImage;
