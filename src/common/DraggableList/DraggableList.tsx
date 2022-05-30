import {
	Button,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const DraggableList = () => {
	return (
		<div>
			<List>
				<ListItem sx={{ display: 'block', width: '100%' }}>
					<div className="flex justify-between items-center w-ful">
						<div className="flex items-center">
							<ListItemIcon className=" cursor-grab">
								<DragIndicatorIcon />
							</ListItemIcon>
							<ListItemText primary="Tickets" />
						</div>
						<div>
							<Button sx={{ mr: 2 }} variant="contained" color="primary">
								Edit
							</Button>
							<Button variant="contained" color="error">
								Delete
							</Button>
						</div>
					</div>
				</ListItem>
				<Divider sx={{ my: 1 }} />
				<ListItem sx={{ display: 'block', width: '100%' }}>
					<div className="flex justify-between items-center w-ful">
						<div className="flex items-center">
							<ListItemIcon className=" cursor-grab">
								<DragIndicatorIcon />
							</ListItemIcon>
							<ListItemText primary="Passes" />
						</div>
						<div>
							<Button sx={{ mr: 2 }} variant="contained" color="primary">
								Edit
							</Button>
							<Button variant="contained" color="error">
								Delete
							</Button>
						</div>
					</div>
				</ListItem>
				<Divider sx={{ my: 1 }} />
				<ListItem sx={{ display: 'block', width: '100%' }}>
					<div className="flex justify-between items-center w-ful">
						<div className="flex items-center">
							<ListItemIcon className=" cursor-grab">
								<DragIndicatorIcon />
							</ListItemIcon>
							<ListItemText primary="Special passes" />
						</div>
						<div>
							<Button sx={{ mr: 2 }} variant="contained" color="primary">
								Edit
							</Button>
							<Button variant="contained" color="error">
								Delete
							</Button>
						</div>
					</div>
				</ListItem>
				<Divider sx={{ my: 1 }} />
			</List>
		</div>
	);
};

export default DraggableList;
