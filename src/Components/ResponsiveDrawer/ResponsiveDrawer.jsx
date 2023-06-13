import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DraftsIcon from "@mui/icons-material/Drafts";
import "./Drawer.css";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import Capture from "../../assets/Capture .png";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{background: "#242423"}}
    >
      {/* <Toolbar style={{background: "#242423"}}/> */}
      <Divider style={{display: "none"}}/>

      <Box style={{background: "#242423"}}>
        <div className="capture_emg">
          <img src={Capture} width={175} alt="" />
        </div>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "#242423" }}>
        <nav aria-label="main mailbox folders" >
          <List style={{background: "#242423",paddingBottom: "60px"}}>

            <Link className="lenk" to="/Stake">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <div className="draw_box">S</div>
                </ListItemIcon>
                <ListItemText primary="Stake" />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link className="lenk" to="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div className="draw_box">S</div>
                  </ListItemIcon>
                  <ListItemText primary="Seed Sales" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link className="lenk" to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <div className="draw_box">P</div>
                </ListItemIcon>
                <ListItemText primary="Presales" />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link className="lenk" to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <div className="draw_box">T</div>
                </ListItemIcon>
                <ListItemText primary="Token Generator" />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link className="lenk" to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <div className="draw_box">P</div>
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link className="lenk" to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <div className="draw_box">S</div>
                </ListItemIcon>
                <ListItemText primary="Stats" />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link className="lenk" to="/">
            <ListItem className="docs" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <div className="draw_box">D</div>
                </ListItemIcon>
                <ListItemText primary="Docs" />
              </ListItemButton>
            </ListItem>
            </Link>

            <div className="draw_hr_main">
              <hr className="draw_hr" />
            </div>

            <Link className="lenk" to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <div className="draw_box_2">
                    <FaTelegramPlane />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Telegram" />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link className="lenk" to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <div className="draw_box_2">
                    <FaTwitter />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Twitter" />
              </ListItemButton>
            </ListItem>
            </Link>
          </List>
        </nav>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} style={{background: "#242423"}}>
      <CssBaseline style={{background: "#242423"}} />
      <AppBar
        position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
        style={{background: "#282828", boxShadow: "none", display: "flex",justifyContent: "space-between", alignItems: "end"}}
        // sx={{ alignItems: { xs: "flex-end",sm: "flex-end", md: "flex-end", lg: "flex-end" },justifyContent: { xs: "flex-end",sm: "flex-end", md: "flex-end", lg: "flex-end" }, }}
      >
        <Toolbar style={{background: "transparent"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="sm_nav">
            <Typography className="sm_nav" variant="h6" noWrap component="div">
              Home
            </Typography>
            <Typography className="sm_nav" variant="h6" noWrap component="div">
              <FaTelegramPlane className="fs-3" />
            </Typography>
            <Typography className="sm_nav" variant="h6" noWrap component="div">
              <FaTwitter className="fs-3" />
            </Typography>

            <Typography className="sm_nav" variant="h6" noWrap component="div">
              <span className="connct">Connect</span>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{background: "#242423"}}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          style={{background: "#242423"}}
          container={container}
          variant="temporary"
          
          open={mobileOpen}
          onClick={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          style={{background: "#242423"}}
          variant="permanent"
          onClose={handleDrawerToggle}

          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box> */}
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
