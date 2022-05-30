import { Divider, Typography } from '@mui/material';
import {
	DataGrid,
	GridColDef,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid';
import { FaHashtag } from 'react-icons/fa';

const columns: GridColDef[] = [
	{
		field: 'id',
		headerName: 'Title',
		hideable: false,
		sortable: false,
		filterable: false,
		flex: 1,
		align: 'center',
	},
	{
		field: 'firstName',
		headerName: 'Start',
		hideable: false,
		sortable: false,
		filterable: false,
		flex: 1,
	},
	{
		field: 'lastName',
		headerName: 'Trainer',
		hideable: false,
		sortable: false,
		filterable: false,
	},
	{
		field: 'email',
		headerName: 'Email',
		hideable: false,
		sortable: false,
		filterable: false,
		flex: 1,
	},
	{
		field: 'age',
		headerName: 'Trans. ID',
		type: 'string',
		hideable: false,
		sortable: false,
		filterable: false,
		flex: 1,
	},
	{
		field: 'startPurch',
		headerName: 'Purchase date',
		hideable: false,
		sortable: false,
		filterable: false,
		flex: 1,
	},

	{
		field: 'refund',
		headerName: 'Refunded',
		hideable: false,
		sortable: false,
		filterable: false,
		flex: 1,
	},
];

const rows = [
	{
		age: 2708404371,
		lastName: 'Snow',
		firstName: 'Jon',
		id: 35242,
		email: 'test@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'FALSE',
		refund: 'FALSE',
	},
	{
		age: 2708404372,
		lastName: 'Lannister',
		firstName: 'Cersei',
		id: 41235322,
		email: 'obama@yahoo.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},

	{
		age: 2708404374,
		lastName: 'Stark',
		firstName: 'Arya',
		id: 16121242,
		email: 'mayahalo@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},
	{
		age: 2708404375,
		lastName: 'Targaryen',
		firstName: 'Daenerys',
		id: 4124123,
		email: 'dotolo1992@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},
	{
		age: 2708404376,
		lastName: 'Melisandre',
		firstName: 'Unknown',
		id: 14242450,
		email: 'omzia42@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},

	{
		age: 2708404371,
		lastName: 'Snow',
		firstName: 'Jon',
		id: 3524332112,
		email: 'test@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'FALSE',
		refund: 'FALSE',
	},
	{
		age: 2708404372,
		lastName: 'Lannister',
		firstName: 'Cersei',
		id: 412353232222,
		email: 'obama@yahoo.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},

	{
		age: 2708404374,
		lastName: 'Stark',
		firstName: 'Arya',
		id: 1612352351242,
		email: 'mayahalo@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},
	{
		age: 2708404375,
		lastName: 'Targaryen',
		firstName: 'Daenerys',
		id: 412124564123,
		email: 'dotolo1992@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},
	{
		age: 2708404376,
		lastName: 'Melisandre',
		firstName: 'Unknown',
		id: 14242442450,
		email: 'omzia42@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},

	{
		age: 2708404371,
		lastName: 'Snow',
		firstName: 'Jon',
		id: 3212,
		email: 'test@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'FALSE',
		refund: 'FALSE',
	},
	{
		age: 2708404372,
		lastName: 'Lannister',
		firstName: 'Cersei',
		id: 412353222,
		email: 'obama@yahoo.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},

	{
		age: 2708404374,
		lastName: 'Stark',
		firstName: 'Arya',
		id: 16126251242,
		email: 'mayahalo@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},
	{
		age: 2708404375,
		lastName: 'Targaryen',
		firstName: 'Daenerys',
		id: 41212123,
		email: 'dotolo1992@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},
	{
		age: 2708404376,
		lastName: 'Melisandre',
		firstName: 'Unknown',
		id: 14263,
		email: 'omzia42@gmail.com',
		startPurch: new Date(),
		cancelTime: new Date(),
		jelentve: 'IGAZ',
		refund: 'FALSE',
	},
];

function CustomToolbar() {
	return (
		<GridToolbarContainer>
			<GridToolbarExport />
		</GridToolbarContainer>
	);
}

const ReservationsDeleted = () => {
	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5" className="uppercase">
					DELETED RESERVATIONS
				</Typography>
			</div>

			<Divider light sx={{ mt: 2, mb: 3 }} />

			<div className="mb-4 flex items-center">
				<FaHashtag className="text-xs text-site-1 mr-2" />
				<span>Count: {rows.length} DELETED RESERVATIONS</span>
			</div>

			<div style={{ display: 'flex', height: '100%' }}>
				<div style={{ flexGrow: 1 }}>
					<DataGrid
						autoHeight
						rows={rows}
						columns={columns}
						pageSize={10}
						disableSelectionOnClick
						components={{
							Toolbar: CustomToolbar,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ReservationsDeleted;
