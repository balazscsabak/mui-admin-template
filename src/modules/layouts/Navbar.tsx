import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useLocation } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';

const subPages = [
	{ name: 'Pages', url: '/pages' },
	{ name: 'Contacts', url: '/contacts' },
	{ name: 'Terms & Cond', url: '/rules' },
	{ name: 'Users', url: '/users' },
	{ name: 'Documents', url: '/requested-docs' },
	{ name: 'Applicants', url: '/applicants' },
	{ name: 'Manager', url: '/password-manager' },
];

const Navbar = () => {
	const route = useLocation();

	if (route.pathname === '/login') return null;

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [anchorElRes, setAnchorElRes] = useState<null | HTMLElement>(null);
	const [anchorElPass, setAnchorElPass] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenResMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElRes(event.currentTarget);
	};

	const handleOpenPassMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElPass(event.currentTarget);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseResMenu = () => {
		setAnchorElRes(null);
	};

	const handleClosePassMenu = () => {
		setAnchorElPass(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Link to={'/'}>
							<Typography
								variant="h6"
								noWrap
								component="a"
								sx={{
									mr: 2,
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'roboto',
									fontWeight: 300,
									letterSpacing: '.1rem',
									color: 'inherit',
									textDecoration: 'none',
								}}
							>
								MUI <span className="ml-1 font-medium">Admin</span>
							</Typography>
						</Link>

						<Box
							sx={{
								ml: 'auto',
								flexGrow: 0,
								display: { xs: 'none', md: 'flex' },
							}}
						>
							<Link to="/">
								<Button
									key={'Főoldal'}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{'Homepage'}
								</Button>
							</Link>

							<Button
								key={'Foglalások'}
								onClick={handleOpenResMenu}
								sx={{ my: 2, color: 'white' }}
								endIcon={<ArrowDropDownIcon className="-ml-1" />}
							>
								Reservations
							</Button>

							<Button
								key={'Bérletek'}
								onClick={handleOpenPassMenu}
								sx={{ my: 2, color: 'white' }}
								endIcon={<ArrowDropDownIcon className="-ml-1" />}
							>
								Passes
							</Button>

							<Link to="/classes">
								<Button
									key={'Órák'}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									Classes
								</Button>
							</Link>

							<Link to="/events">
								<Button
									key={'Események'}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									Events
								</Button>
							</Link>
						</Box>

						<IconButton
							onClick={handleOpenUserMenu}
							sx={{ p: 0, mr: 2, ml: 2 }}
						>
							<SettingsIcon className="text-white" fontSize="small" />
						</IconButton>

						<IconButton onClick={handleClickOpen} sx={{ p: 0 }}>
							<PowerSettingsNewIcon className="text-white" fontSize="small" />
						</IconButton>

						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElRes}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElRes)}
							onClose={handleCloseResMenu}
						>
							<Link to="/reservations/deleted">
								<MenuItem
									key={'Deleted reservations'}
									onClick={handleCloseResMenu}
								>
									<Typography textAlign="center">
										{'Deleted reservations'}
									</Typography>
								</MenuItem>
							</Link>
							<Link to="/reservations/purchases">
								<MenuItem key={'Purchases'} onClick={handleCloseResMenu}>
									<Typography textAlign="center">{'Purchases'}</Typography>
								</MenuItem>
							</Link>
						</Menu>

						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElPass}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElPass)}
							onClose={handleClosePassMenu}
						>
							<Link to="/passes/list">
								<MenuItem key={'All sale'} onClick={handleClosePassMenu}>
									<Typography textAlign="center">{'All'}</Typography>
								</MenuItem>
							</Link>
							<Link to="/passes/sales">
								<MenuItem key={'Sales'} onClick={handleClosePassMenu}>
									<Typography textAlign="center">{'Sales'}</Typography>
								</MenuItem>
							</Link>
							<Link to="/passes/purchases">
								<MenuItem key={'Purchases'} onClick={handleClosePassMenu}>
									<Typography textAlign="center">{'Purchases'}</Typography>
								</MenuItem>
							</Link>
						</Menu>

						<Menu
							sx={{ mt: '37px' }}
							id="menu-reservations"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{subPages.map((subPage) => (
								<Link to={subPage.url}>
									<MenuItem key={subPage.url} onClick={handleCloseUserMenu}>
										<Typography textAlign="center">{subPage.name}</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Toolbar>
				</Container>
			</AppBar>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'Are you sure you want to sign out?'}
				</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose}>cancel</Button>
					<Button onClick={() => window.location.reload()} autoFocus>
						Sign out
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Navbar;
