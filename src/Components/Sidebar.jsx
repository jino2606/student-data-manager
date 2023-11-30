import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navigationbar'
import { ReactComponent as Logo } from '../logo.svg';
import './sidebar.css';
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupsIcon from '@mui/icons-material/Groups';


/* Sidebar Material Ui code */
const drawerWidth = 290;
const changedWidth = 65;

const openedMixin = (theme) => ({
width: drawerWidth,
transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
}),
overflowX: 'hidden',
});

const closedMixin = (theme) => ({
transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
overflowX: 'hidden',
width: `calc(${theme.spacing(7)} + 1px)`,
[theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
},
});

const DrawerHeader = styled('div')(({ theme }) => ({
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-end',
padding: theme.spacing(0, 1),
// necessary for content to be below app bar
...theme.mixins.toolbar,
}));

// const drawerRef = useRef(null);
// const width = drawerRef.current ? drawerRef.current.clientWidth : 0;

const AppBar = styled(MuiAppBar, {
shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, isMobile }) => ({
	width: isMobile ? '100%' : `calc(100% - ${changedWidth}px)`,
	// width: `calc(100% - ${changedWidth}px)`,
	// zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
...(open && {
    marginLeft: drawerWidth,
	width: isMobile ? '100%' : `calc(100% - ${drawerWidth}px)`,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
	
    }),
	
}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
	className: 'sidebar_style',
    ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
    }),
}),
);

function Sidebar({ children, component }) {

	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
			setOpen(true);
	};

	const handleDrawerClose = () => {
			setOpen(false);
	};


	const iconMapping = {
		'Home': <HomeIcon />,
		'Add Students': <PersonAddAltIcon />,
		'Group Management': <GroupsIcon />,
		};

	const routeMapping = {
		'Home': '/home',
		'Add Students': '/addstudent',
		'Group Management': '/groups',
		};

	/* For temporary and permanent drawer */
	const [isPermanent, setIsPermanent] = useState(true)

	const changeDrawerVariant = (e)=>{
		setIsPermanent(!isPermanent)
		// e.preventDefault();
	}
	const theme = useTheme();
	// Add the following lines to use useMediaQuery hook
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	useEffect(()=>{
		isMobile?setIsPermanent(false):setIsPermanent(true)
	},[isMobile])


  return (
        <>
			<Box sx={{ display: 'flex' }}>
			{/* <CssBaseline /> */}
			<AppBar position="fixed" open={open} sx={{boxShadow:'none'}} isMobile={isMobile && !isPermanent? true :false}>

					{/* Adding Our custom Nav bar */}
					<Navbar component={component} drawerType={isPermanent} setIsPermanent={setIsPermanent} isMobile={isMobile} />

			</AppBar>

			{/* Use a conditional statement to decide whether to render a permanent or temporary drawer */}
		<Drawer variant={ isPermanent?'permanent':'temporary' } position="relative" open={open} 
			classes={{ paper: 'drawerPaper' }}
			>
				{/* {drawer} */}

				<DrawerHeader className='drawer_header'>
					<Link to={'/'}>
						<Box>
							<Logo style={{width:'2.3rem'}} />  {' '}
							<Typography 
							sx={{ display: open ? 'inline-block' : 'none', fontSize:'1.3em', color:'white' }}>
								APPNAME 
							</Typography>
						</Box>
					</Link>

					<IconButton onClick={handleDrawerClose} sx={{ display: open ? 'flex' : 'none'}} >
						<ChevronLeftIcon className='style' />
					</IconButton>

				</DrawerHeader>
				

				<Divider />
				<List sx={{}}>
					<Box sx={{paddingX: '20px', marginBottom: '10px', marginTop: '10px'}}>
						<Typography sx={{display: open ? 'block' : 'none', textAlign: 'center', fontSize: '25px'}} className='dwawer_text'>Pages</Typography>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							sx={{

								padding: 0,
								'&.MuiIconButton-root': {
								},
								...(open && { display: 'none' }),
							}}
							className="custom-icon-color"
							>	
							<MenuIcon />
						</IconButton>
					</Box>
					
					{['Home', 'Add Students', 'Group Management'].map((text, index) => (
						<React.Fragment key={text}>
						<Link  to={routeMapping[text]} style={{ textDecoration: 'none', color: 'inherit' }}>
						<ListItem key={text} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{iconMapping[text]}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
								
							</ListItemButton>

						</ListItem>
						</Link>
						</React.Fragment>
						
					))}
				</List>
				<Divider />
			</Drawer>

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />

				{/* Render children */}
				{children}
			</Box>
		</Box>
    </>
  )
}

// Sidebar.propTypes = {
// 	window: PropTypes.func,
//   };

export default Sidebar
