import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const BaseAdmin = () => {
	return (
		<Container maxWidth="lg">
			<div className="mt-10 mb-28">
				<Outlet />
			</div>
		</Container>
	);
};

export default BaseAdmin;
