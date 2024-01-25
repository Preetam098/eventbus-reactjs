import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BgImage from '../../../Assets/applogo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {Events} from '../Components/Home/AllEvents';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import MyCart from '../MyCart/Index';


const pages = [
  {
    id: 0,
    name: 'HOME',
    path: '/Homepage'
  },
  {
    id: 1,
    name: 'All EVENTS',
    path: '/AllEvents'
  },
  {
    id: 2,
    name: 'CONCERTS',
    path: '/Concerts'
  },
  {
    id: 3,
    name: 'FESTIVALS',
    path: '/Festivals'
  },
  {
    id: 4,
    name: 'SPORTS',
    path: '/Sports'
  },
  {
    id: 5,
    name: '3 ARENA EVENTS',
    path: '/All3ArenaEvents'
  },
  {
    id: 6,
    name: ' CORK EVENTS',
    path: '/AllCorkEvents'
  },

];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [state, setState] = React.useState({});
  let navigate = useNavigate();


  const MyCarts = () => {
    console.log('chl rha hia')
    navigate('/MyCart')
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ backgroundColor: '#111827', width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      {/* =--------------- start here -------------= */}


      <Box sx={{ p: '20px 15px' }}>
        <img
          style={{
            maxHeight: '3rem',
          }}
          src={BgImage} alt="BigCo Inc. logo" />

        <div style={{
          color: '#00f9cc'
        }}>
          <h2>
            Event & Concert Travel
          </h2>

          <h5 style={{
            fontSize: '14px',
            // mb:2
          }}>
            Book Your Individual bus seats
          </h5>

          <FacebookIcon style={{
            m: 2,
            color: '#00f9cc',
            background: 'green',
            borderRadius: '50%',
            width: '25px',
            height: '26px'
          }} />
          <TwitterIcon style={{
            m: 2,
            color: '#00f9cc',
            background: '#1f2937',
            borderRadius: '50%',
            width: '25x',
            height: '26px'
          }} />
          <YouTubeIcon style={{
            m: 2,
            color: '#00f9cc',
            background: '#1f2937',
            borderRadius: '50%',
            width: '25x',
            height: '26px'
          }} />
          <InstagramIcon style={{
            m: 2,
            color: '#00f9cc',
            background: '#1f2937',
            borderRadius: '50%',
            width: '25x',
            height: '26px'
          }} />
          {/* <FacebookIcon/> */}
          {/* <FacebookIcon sx={{ display: { fontSize:'30 px' , }   }} /> */}
          {/* <TwitterIcon sx={{ display: { fontSize:'30px' }  }} />
          <YouTubeIcon sx={{ display: { fontSize:'30px' } }} />
          <InstagramIcon sx={{ display: { fontSize:'30px' } }} />  */}

        </div>


      </Box>

      <Divider color='#1f2937' />

      <List sx={{
        color: 'white',
      }}>
        {
          pages && pages.map((page, index) => {
            return (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography textAlign="center"  >
                  <p sx={{
                    color: 'white',
                    textDecoration: 'none'
                  }} to={page.path}>{page.name}</p>
                </Typography>
              </MenuItem>
            )
          })}
      </List>

      <Divider color='#1f2937' />

      <Box sx={{
        my: 2,
      }}>
        <Stack spacing={1} direction="row" sx={{
          justifyContent: 'center',


        }}>
          <Button variant="text" style={{
            borderRadius: '20px',
            width: '40%',
            backgroundColor: '#00f9cc',
            height: '41px',
            color: 'Black'

          }}>Login</Button>


          <Button variant="text" style={{
            borderRadius: '20px',
            width: '40%',
            backgroundColor: '#00f9cc',
            height: '41px',
            color: 'Black'
          }}>Signup</Button>
        </Stack>
      </Box>


    </Box>
  )


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);

  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);

  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <>

<Container maxWidth="xl"  sx={{
  mx:0
             }}>
      <AppBar position="static" sx={{
        borderBottom: "1px solid #00f9cc",
        backgroundColor: '#111827',
        position: 'relative',
        padding:'15px',
      }} >

      
          <Toolbar disableGutters>
            <Container maxWidth='xl' sx={{
              pt: 2,
              pb: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <img
                  style={{ maxHeight: '3rem' }}
                  src={BgImage} alt="BigCo Inc. logo" />
              </div>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', color: 'black', } }}>
                {
                  pages && pages.map((page, index) => {
                    return (
                      <MenuItem key={index} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" sx={{
                          fontSize:'13px'
                        }}>
                          <Link style={page === index ? { color: 'green'  } : {}} to={page.path}>{page.name}</Link>
                        </Typography>
                      </MenuItem>
                    )
                  })}
              </Box>
              <Box sx={{ flexGrow: 0, display: 'flex' }}>
                <Tooltip title="My Cart">
                  <IconButton onClick={MyCarts} sx={{ p: 0, color: '#00f9cc' }}>
                    <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: '35px' }, mr: 2 }} />
                  </IconButton>
                </Tooltip>
                <IconButton>
                  <SearchIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: '35px', color: '#00f9cc' }, mr: 2 }} />
                </IconButton>
                <IconButton>
                  {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <MenuIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: '35px', color: '#00f9cc' }, mr: 0 }} onClick={toggleDrawer(anchor, true)}>{ } </MenuIcon>
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}


                </IconButton>
              </Box>
            </Container>
          </Toolbar>
      
      </AppBar>
      </Container>
   
    </>
  );
}
export default ResponsiveAppBar;