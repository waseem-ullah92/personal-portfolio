"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Button, Typography } from "@mui/material";
import Image from "next/image";
// import logo from "../../assets/svg/logo.svg";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { StyledNavLink } from "./navbar-styles";

const navItems = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Experience", link: "/experience" },
  { id: 4, title: "Projects", link: "/projects" },
  { id: 5, title: "Skills", link: "/skills" },
  { id: 6, title: "Services", link: "/services" },
  { id: 7, title: "Contact Us", link: "/contact" },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


const drawerWidth = 240;
function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const router = useRouter();
  const pathName = usePathname();
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", padding: "20px" }}
    >
      <Link href={"/home"}>Logo</Link>
      <Divider />
      <List>
        {navItems?.map((item: any) => (
          <ListItem key={item?.label} disablePadding>
            <ListItemButton>
              <Link
                href={`${item?.path}`}
                style={{
                  color: "#2E2E2E",
                  fontSize: "18px",
                  fontWeight: "400",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  margin: "7px 0px",
                }}
              >
                {item?.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box mb={1}>
        <Button variant="contained">Resume</Button>
      </Box>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" ,  position: "sticky",
      top: "0",
      zIndex: 1000,
      transform: "translateZ(0)",
      webkitBackdropFilter: "saturate(180%) blur(5px)",
      boxShadow: "inset 0 -1px 0 0 #eaeaea",
      backdropFilter: "saturate(180%) blur(5px)",
      background: "hsla(0, 0%, 100%, .8)"}}>
      <CssBaseline />
      <Box sx={{ width: "100%" }}>
        <Toolbar disableGutters>
          <Grid
            container
            sx={{ justifyContent: { lg: "space-between" } }}
            alignItems={"center"}
          >
            <Grid item xs={1} sx={{ display: { lg: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon style={{ color: "#FF3B83" }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs
              lg={1}
              xl={1}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Link href={"/home"}>Logo</Link>
            </Grid>
            <Grid
              item
              lg={10}
              xl={10}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: { lg: "center", xl: "center" },
                  
                }}
              >
                {navItems?.map((item: any) => (
                  <StyledNavLink
                    key={item.id}
                    href={item.link}
                    className={pathName.includes(item.link) ? "active" : ""}
                  >
                    <Typography
                      variant="body2"
                      fontWeight={pathName.includes(item.link) ? "600" : "500"}
                      color={
                        pathName.includes(item.link) ? "primary" : "neutral.900"
                      }
                    >
                      {item.title}
                    </Typography>
                  </StyledNavLink>
                ))}
              </Box>
            </Grid>
            <Grid item xs lg={1} xl={1}>
              <Button variant="contained">Resume</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
      </nav>
    </Box>
  );
}

export default Header;


