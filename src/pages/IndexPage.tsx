import { Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import FrontpageCuntdown from '../common/FrontpageCuntdown';
import FrontpageImage from '../common/FrontpageImage';
import { FaHashtag } from 'react-icons/fa';

const IndexPage = () => {
	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">EDIT HOMEPAGE</Typography>
				<div>
					<Button variant="outlined" color="error">
						Cancel
					</Button>
					<Button variant="contained" color="success" sx={{ ml: 2 }}>
						Save
					</Button>
				</div>
			</div>

			<Divider light sx={{ mt: 2, mb: 3 }} />

			<div className="text-xl mb-4 font-medium flex items-center">
				<FaHashtag className="text-sm text-site-1 mr-2" />
				<div>Homepage banner images</div>
			</div>

			<div className="mb-8">
				<Typography paragraph={true}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
					delectus deleniti accusamus dolorem natus nesciunt inventore,
					exercitationem vitae. Exercitationem vitae deleniti accusamus dolorem
					natus nesciunt invento
				</Typography>
			</div>

			<div className="mb-16">
				<Grid container spacing={6}>
					<Grid item xs={4}>
						<FrontpageImage />
					</Grid>
					<Grid item xs={4}>
						<FrontpageImage />
					</Grid>
					<Grid item xs={4}>
						<FrontpageImage />
					</Grid>
				</Grid>
			</div>

			<div className="text-xl mb-4 font-medium flex items-center">
				<FaHashtag className="text-sm text-site-1 mr-2" />
				<div>Countdown timer images</div>
			</div>

			<div className="mb-8">
				<Typography paragraph={true}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
					delectus deleniti accusamus dolorem natus nesciunt inventore,
					exercitationem vitae facilis eaque dicta aspernatur assumenda autem,
					asperiores. Facilis eaque dicta aspernatur assumenda autem,
					asperiores, reprehenderit eos vero sapiente officiis? Deleniti
					accusamus dolorem natus nesciunt inventore, exercitationem vitae
					facilis eaque dicta aspernatur assumenda autem, asperiores,
					reprehenderit eos vero sapiente officiis?
				</Typography>
			</div>

			<div>
				<FrontpageCuntdown />
			</div>
		</div>
	);
};

export default IndexPage;
