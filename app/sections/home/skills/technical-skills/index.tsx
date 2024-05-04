"use client";
import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  technicalSkillsCardData,
  technicalSkillsData,
} from "./technical-skills-data";
import { Grid, Theme, alpha } from "@mui/material";
import CustomCard from "@/app/components/custom-card";
import Image from "next/image";

const DynamicSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": (theme: Theme) => ({
    border: "none",
    backgroundColor: theme.palette.primary.main,
  }),
  "& .MuiSlider-thumb": (theme: Theme) => ({
    height: 24,
    width: 24,
    backgroundColor: theme.palette.primary.main,
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  }),
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function TechnicalSkills() {
  return (
    <Box flexGrow={1}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={6} lg={6} md={6} sm={12}>
          {technicalSkillsData?.map((item) => {
            return (
              <Box key={item?.id} sx={{ maxWidth: 500 }}>
                <Typography gutterBottom>{item?.title}</Typography>
                <DynamicSlider
                  // valueLabelDisplay="on"
                  aria-label="pretto slider"
                  defaultValue={parseInt(item?.value)}
                  disabled
                  sx={{
                    "& .MuiSlider-thumb": (theme: Theme) => ({
                      backgroundColor: theme.palette.primary.main,
                    }),
                    "& .MuiSlider-track": (theme: Theme) => ({
                      backgroundColor: alpha(theme.palette.primary.light, 0.5),
                    }),
                  }}
                />
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={12} xl={6} lg={6} md={6} sm={12}>
          <Grid container spacing={2}>
          {technicalSkillsCardData?.map((item) => {
            return (
              <Grid item xs={6} xl={3} lg={3} md={3} sm={6}>
              <CustomCard key={item?.id} sxProps={{width:"120px", height:"120px" ,cursor:"pointer"}}>
                <Box display="flex" justifyContent="space-between" alignItems='center' flexDirection='column' gap={1}>
                  <Box mt={2} sx={{borderRadius:"50%", border:'none' ,width:"60px", height:"60px" }}>
                    <Image
                      src={item?.imgIcon}
                      alt="skill icon"
                      priority
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Typography variant="subtitle1">{item?.title}</Typography>
                </Box>
              </CustomCard>
              </Grid>
            );
          })}
           </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
