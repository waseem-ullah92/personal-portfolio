"use client";
import React, { useRef } from "react";
import { Box, Grid, List, Theme, Typography } from "@mui/material";
// import required modules
import Image from "next/image";
import CustomCard from "@/app/components/custom-card";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import fosterImg from "../../../assets/project-images/fosterAppImg.svg";
import plImg from "../../../assets/project-images/personnelLibraryImg.png";


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

  return (
    <Box mt={4} mb={4}>
      <Typography variant="h2" color="text.primary" mt={2} mb={2}>
        Featured Projects
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} xl={5.5}>
          <Typography variant="h3" color="text.primary" mb={2}>
            Foster App
          </Typography>
          <Typography variant="body1"  color="text.primary">
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
                      <Typography variant="subtitle2" color="text.primary">
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
          {/* <CustomCard> */}
            <Box>
              <Image
                src={fosterImg}
                alt="Foster App"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          {/* </CustomCard> */}
        </Grid>

        <Grid item xs={12} xl={6.5}>
          {/* <CustomCard> */}
            <Box>
              <Image
                src={plImg}
                alt="Personal Library"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          {/* </CustomCard> */}
        </Grid>
        <Grid item xs={12} xl={5.5}>
          <Typography variant="h3" color="text.primary" mb={2}>
            Personnel Library
          </Typography>
          <Typography variant="body1" color="text.primary">
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
                      <Typography variant="subtitle2" color="text.primary">
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
