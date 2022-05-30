import { Typography, Button, Divider } from '@mui/material';
import { FaHashtag } from 'react-icons/fa';

const RequestedDocs = () => {
	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">DOCUMENTS</Typography>
			</div>

			<Divider light sx={{ mt: 2, mb: 3 }} />

			<div className="mb-4 flex items-center">
				<FaHashtag className="text-xs text-site-1 mr-2" />
				<span>Count: 0 DOCUMENT</span>
			</div>

			<div className="text-center mt-8">No document found.</div>
		</div>
	);
};

export default RequestedDocs;
