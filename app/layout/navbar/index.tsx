"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Button, styled, Typography } from "@mui/material";
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
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const navItems = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Experience", link: "/experience" },
  { id: 4, title: "Projects", link: "/projects" },
  { id: 5, title: "Skills", link: "/skills" },
  { key: 6, label: "Services", link: "/services" },
  { key: 7, label: "Contact", link: "/contact" },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const drawerWidth = 240;
function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const token =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("loginToken") || null
      : null;
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
    // <AppBar position="static" sx={{ background: "#F7F5ED", boxShadow: "none" }}>
    <Box sx={{ display: "flex" }}>
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
              lg={2}
              xl={2}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Link href={"/home"}>Logo</Link>
            </Grid>
            <Grid
              item
              lg={8}
              xl={8}
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
                  // <Button
                  //   key={item?.label}
                  //   // onClick={handleCloseNavMenu}
                  //   sx={{
                  //     my: 2,
                  //     display: "inline-block",
                  //     fontSize: "18px",
                  //     fontWeight: "400",
                  //     position:"relative",
                  //     "&:hover": {
                  //       backgroundColor: "transparent", // Change this to your desired hover color
                  //     },
                  //   }}
                  // >
                  //   <Link
                  //     href={`${item?.path}`}
                  //     className="navLinks"
                  //     style={{
                  //       color: router === item?.path ? "#FF3B83" : "#2E2E2E",
                  //       // color: "#ccd6f6",
                  //       fontWeight: "500",
                  //       textDecoration: "none",
                  //     }}
                  //   >
                  //     {item?.label}
                  //   </Link>
                  // </Button>

                  <StyledNavLink
                    key={item.id}
                    href={item.link}
                    className={pathName.includes(item.link) ? "active" : ""}
                  >
                    <Typography
                      variant="body2"
                      fontWeight={pathName.includes(item.link) ? "600" : "500"}
                      color={
                        pathName.includes(item.link) ? "primary" : "neutral.400"
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
    // </AppBar>
  );
}

export default Header;

// Styled  components

const StyledNavLink = styled(Link)(({ theme }) => ({
  position: "relative",
  padding: "0px 8px",
  color: theme.palette.neutral[600],
  display: "block",
  borderBottom: "2px solid transparent",
  textDecoration: "none",
  textAlign: "center",
  fontFamily: poppins.style.fontFamily,
  "&.active::before": {
    opacity: 1,
  },
  "&::before": {
    content: `""`,
    opacity: 0,
    position: "absolute",
    width: "100%",
    height: "5px",
    bottom: "-29px",
    left: 0,
    borderTopLeftRadius: "5rem",
    borderTopRightRadius: "5rem",
    backgroundColor: theme.palette.primary.main,
    transition: "opacity .150s",
  },
  "&:hover": {
    color :theme.palette.primary.main,
    "&::before": {
      opacity: 1,
    },
  },
}));
