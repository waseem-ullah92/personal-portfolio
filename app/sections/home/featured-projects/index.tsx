"use client";
import React, { useRef } from "react";
import { Box, Grid, List, Theme, Typography } from "@mui/material";
// import required modules
import Image from "next/image";
import CustomCard from "@/app/components/custom-card";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import fosterImg from '../../../assets/project-images/foster.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/system";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MutableRefObject } from "react";
import { Rubik_Broken_Fax } from "next/font/google";
import { transform } from "lodash";

const fosterProjectTecStack = [
  "React JS",
  "Next JS",
  "TypeScript",
  "Redux",
  "RTK Query",
  "Material UI",
  "Responsive Design",
  "Product Design",
  "Jira and Bitbucket",
];

export function FeaturedProjects(): JSX.Element {
  const styles = projectStyle();
  const progressCircle: MutableRefObject<HTMLElement | null> = useRef(null);
  const progressContent: MutableRefObject<HTMLElement | null> = useRef(null);

  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    if (progressCircle.current) {
      // Ensure progress is converted to string
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      // Ensure time is converted to number
      progressContent.current.textContent = `${Math.ceil(
        Number(time) / 1000
      )}s`;
    }
  };

  const CardContainer = styled(Box)(({ theme }) => ({
    perspective: "50em",
    "&:nth-of-type(1)": {
      "--bi": "repeating-linear-gradient(30deg, #111 0 0.25em, #333 0 1em)",
    },
    "&:nth-of-type(2)": {
      "--bi":
        "linear-gradient(#555 5em, #0000 3em), linear-gradient(60deg, #880E4F, #1A237E)",
    },
  }));

  const Card = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "90%",
    // padding: '3em',
    color: "#fff",
    transform: "rotateX(60deg)",
    transformStyle: "preserve-3d",
    transition: "transform 1s",
    display: "flex",
    alignItems: "center",
    boxSizing: "content-box",
    aspectRatio: "16 / 9",
    border: "1px solid black",
    borderRadius: "16px",
    padding: "1rem 3rem",
    margin: "0 auto",
  }));

  const Layers = styled(Box)(({ theme }) => ({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    zIndex: -1,
  }));

  const Layer = styled(Box)(({ theme }) => ({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: "1em",
    backgroundImage: "var(--bi)",
    transform: "translateZ(var(--tz))",
    boxShadow: "0 0 0.5em #000d inset",
    "&:last-child": {
      boxShadow: "0 0 0.5em #000d inset, 0 0 5px #000",
    },
    "&:nth-of-type(1)": { "--tz": "0px" },
    "&:nth-of-type(2)": { "--tz": "-2px" },
    "&:nth-of-type(3)": { "--tz": "-4px" },
    "&:nth-of-type(4)": { "--tz": "-6px" },
    "&:nth-of-type(5)": { "--tz": "-8px" },
    "&:nth-of-type(6)": { "--tz": "-10px" },
    "&:nth-of-type(7)": { "--tz": "-12px" },
    "&:nth-of-type(8)": { "--tz": "-14px" },
    "&:nth-of-type(9)": { "--tz": "-16px" },
    "&:nth-of-type(10)": { "--tz": "-18px" },
  }));

  return (
    <Box mt={4} mb={4}>
      <Typography variant="h3" color="text.primary" mt={2} mb={2}>
        Featured Projects
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} xl={5.5}>
          <Typography variant="h6" color="text.primary" mb={2}>
            Personnel Library
          </Typography>
          <Typography variant="body2" fontWeight="500" color="text.primary">
            Personnel Library is more than just another HR solution – it's your
            strategic partner in achieving HR excellence. Offering cutting-edge
            solutions across Recruitment, Onboarding, Personnel Library is
            dedicated to empowering businesses of all sizes. Their mission is
            clear: to optimize HR processes, nurture talent growth, and drive
            success. With unparalleled support and expertise, Personnel Library
            ensures a seamless journey towards unlocking the full potential of
            your workforce. Revolutionize your HR workflow, bid farewell to
            manual processes, and welcome automated efficiency with Personnel
            Library.
          </Typography>

          <List>
            <Grid container spacing={2}>
              {fosterProjectTecStack?.map((item) => {
                return (
                  <Grid key={item} xl={6} lg={6} md={6} xs={6}>
                    <Box
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      flexWrap="nowrap"
                      gap={1}
                      p={1}
                    >
                      {/* <ListItemIcon> */}
                      <PlayArrowIcon sx={styles.iconStyle} />
                      {/* </ListItemIcon> */}
                      <Typography variant="subtitle1" color="text.primary">
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </List>
        </Grid>
        <Grid item xs={12} xl={6.5}>
        <Box>
            <Image src={fosterImg} alt="Foster App"  style={{ width: "100%", height: "100%" }}/>
          </Box>
        </Grid>

        <Grid item xs={12} xl={6.5}>
          <Box>
            <Image src={fosterImg} alt="Foster App"  style={{ width: "100%", height: "100%" }}/>
          </Box>
          
        </Grid>
        <Grid item xs={12} xl={5.5}>
          <Typography variant="h6" color="text.primary" mb={2}>
            Foster App
          </Typography>
          <Typography variant="body2" fontWeight="500" color="text.primary">
            Foster care is a crucial system providing a secure environment for
            minors who can’t live with their biological families. State-approved
            caregivers, selected through a stringent vetting process, aim to
            create a family-like setting for children’s healthy development. To
            streamline this process, an innovative app connects governmental and
            social services with potential caregivers, optimizing communication
            and collaboration for thoughtful placements. The app also addresses
            financial aspects, compensating caregivers for their valuable role
            in providing stability and love. Emphasizing the importance of
            family units, the app contributes to the broader goal of ensuring
            that every child in need finds access to a safe and nurturing foster
            home. Through its efficient coordination and recognition of
            caregivers’ contributions, the platform enhances the overall foster
            care experience, prioritizing the well-being of children in
            challenging circumstances.
          </Typography>
          <List>
            <Grid container spacing={2}>
              {fosterProjectTecStack?.map((item) => {
                return (
                  <Grid key={item} xl={6} lg={6} md={6} xs={6}>
                    <Box
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      flexWrap="nowrap"
                      gap={1}
                      p={1}
                    >
                      {/* <ListItemIcon> */}
                      <PlayArrowIcon sx={styles.iconStyle} />
                      {/* </ListItemIcon> */}
                      <Typography variant="subtitle1" color="text.primary">
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
export function projectStyle(): any {
  return {
    iconStyle: (theme: Theme) => ({
      color: theme.palette.primary.main,
      fontSize: "14px",
    }),
  };
}
