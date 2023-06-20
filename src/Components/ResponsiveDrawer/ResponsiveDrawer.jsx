import React from "react";
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
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import bg_logo from "../../assets/bg_logo.png";

const drawerWidth = 330;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // let url = window.location.pathname

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ background: "#242423" }}>
      {/* <Toolbar style={{background: "#242423"}}/> */}
      <Divider style={{ display: "none" }} />

      <Box style={{ background: "#242423" }}>
        <div className="capture_emg d-flex py-4">
          {/* <img src={Capture} width={175} alt="" /> */}
          <div className="bg_and_logo">
            <img src={bg_logo} width={30} alt="" className="logo_back" />
            <img src={logo} width={30} alt="" className="logo_top" />
          </div>
          <div className="capture_emg_box_txt ps-2">
            <span className="pep_geen">Pepe</span>
            <span className="pep_white "> Incubator</span>
            <div className="capture_emg_box_btn mt-1">
              <button>Buy $PEPEINC</button>
            </div>
          </div>
        </div>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "#242423" }}>
        <nav aria-label="main mailbox folders">
          <List style={{ background: "#242423", paddingBottom: "60px" }}>
            <Link
              className="lenk"
              to="/"
              onClick={() => props.setIsActive("Stake")}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon className="">
                    <div
                      className={
                        props.IsActive === "/" ? "draw_box Active1" : "draw_box"
                      }
                    >
                      S
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={
                          props.IsActive === "/"
                            ? "drawer_text Active"
                            : "drawer_text "
                        }
                      >
                        Stake
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              className="lenk"
              to="/Seed_Sales"
              onClick={() => props.setIsActive("Seed_Sales")}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div
                      className={
                        props.IsActive === "/Seed_Sales"
                          ? "draw_box Active1"
                          : "draw_box"
                      }
                    >
                      S
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={
                          props.IsActive === "/Seed_Sales"
                            ? "drawer_text Active"
                            : "drawer_text "
                        }
                      >
                        Seed Sales
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              className="lenk"
              to="/Presales"
              onClick={() => props.setIsActive("/Presales")}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div
                      className={
                        props.IsActive === "/Presales"
                          ? "draw_box Active1"
                          : "draw_box"
                      }
                    >
                      P
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={
                          props.IsActive === "/Presales"
                            ? "drawer_text Active"
                            : "drawer_text "
                        }
                      >
                        Presales
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              className="lenk"
              to="/Token_Generator"
              onClick={() => props.setIsActive("/Token_Generator")}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div
                      className={
                        props.IsActive === "/Token_Generator"
                          ? "draw_box Active1"
                          : "draw_box"
                      }
                    >
                      T
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={
                          props.IsActive === "/Token_Generator"
                            ? "drawer_text Active"
                            : "drawer_text "
                        }
                      >
                        Token Generator
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              className="lenk"
              to="/Portfolio"
              onClick={() => props.setIsActive("/Portfolio")}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div
                      className={
                        props.IsActive === "/Portfolio"
                          ? "draw_box Active1"
                          : "draw_box"
                      }
                    >
                      P
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={
                          props.IsActive === "/Portfolio"
                            ? "drawer_text Active"
                            : "drawer_text "
                        }
                      >
                        Portfolio
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              className="lenk"
              to="/Stats"
              onClick={() => props.setIsActive("/Stats")}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div
                      className={
                        props.IsActive === "/Stats"
                          ? "draw_box Active1"
                          : "draw_box"
                      }
                    >
                      S
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={
                          props.IsActive === "/Stats"
                            ? "drawer_text Active"
                            : "drawer_text "
                        }
                      >
                        Stats
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              className="lenk"
              to="/Docs"
              onClick={() => props.setIsActive("/Docs")}
            >
              <ListItem className="docs" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div
                      className={
                        props.IsActive === "/Docs"
                          ? "draw_box Active1"
                          : "draw_box"
                      }
                    >
                      D
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={
                          props.IsActive === "/Docs"
                            ? "drawer_text Active"
                            : "drawer_text "
                        }
                      >
                        Docs
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <div className="draw_hr_main">
              <hr className="draw_hr" />
            </div>

            <Link
              className="lenk"
              to="/ComingSoon"
              onClick={() => props.setIsActive("Telegram")}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div
                      className={
                        props.IsActive === "Telegram"
                          ? "draw_box_2 Active1"
                          : "draw_box_2"
                      }
                    >
                      <FaTelegramPlane />
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={
                          props.IsActive === "Telegram"
                            ? "drawer_text Active"
                            : "drawer_text "
                        }
                      >
                        Telegram
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link className="lenk" to="/ComingSoon">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div
                      className={
                        props.IsActive === "Telegram"
                          ? "draw_box_2 Active1"
                          : "draw_box_2"
                      }
                    >
                      <FaTwitter />
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={
                          props.IsActive === "Twitter"
                            ? "drawer_text Active"
                            : "drawer_text "
                        }
                      >
                        Twitter
                      </span>
                    }
                  />
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
    <Box sx={{ display: "flex" }} style={{ background: "#242423" }}>
      <CssBaseline style={{ background: "#242423" }} />
      <AppBar
        position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
        style={{
          background: "#282828",
          boxShadow: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
        // sx={{ alignItems: { xs: "flex-end",sm: "flex-end", md: "flex-end", lg: "flex-end" },justifyContent: { xs: "flex-end",sm: "flex-end", md: "flex-end", lg: "flex-end" }, }}
      >
        <Toolbar style={{ background: "transparent" }} className="toolBar">
          <Box className="sm_nav nav_bg_home nav_left Home_section_lg">
            <Typography className="sm_nav" variant="h6" noWrap component="div">
              <span >Home</span>
              
            </Typography>
            <Typography className="sm_nav" variant="h6" noWrap component="div">
              <FaTelegramPlane className="fs-3" />
            </Typography>
            <Typography className="sm_nav" variant="h6" noWrap component="div">
              <FaTwitter className="fs-3" />
            </Typography>

            <Typography className="sm_nav" variant="h6" noWrap component="div">
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1y334na"
                tabindex="0"
                type="button"
              >
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1etrg7"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="WalletIcon"
                >
                  <path d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84l-3.49 2.93zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2z"></path>
                </svg>
                <p class="MuiTypography-root MuiTypography-body1 css-1qhlbm">
                  Connect
                </p>
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </Typography>
          </Box>
          <div className="Menu_btn_and_connect">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon className="men_icn"/>
            </IconButton>

            <Box className="sm_nav nav_left Home_setion_Res">
              <Typography
                className="sm_nav"
                variant="h6"
                noWrap
                component="div"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1y334na"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1etrg7"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="WalletIcon"
                  >
                    <path d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84l-3.49 2.93zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2z"></path>
                  </svg>
                  <p class="MuiTypography-root MuiTypography-body1 css-1qhlbm">
                    Connect
                  </p>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </Typography>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
        style={{ background: "#242423" }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          style={{ background: "#242423" }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClick={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          style={{ background: "#242423" }}
          variant="permanent"
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "none", lg: "block" },
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
