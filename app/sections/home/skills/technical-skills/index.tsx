"use client";
import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { technicalSkillsData } from "./technical-skills-data";
import { Grid } from "@mui/material";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
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
        {technicalSkillsData?.map((item) => {
          return (
            <Grid item xs={12} xl={6} key={item?.id}>
              <Typography gutterBottom>{item.title}</Typography>
              <PrettoSlider
                valueLabelDisplay="on"
                aria-label="pretto slider"
                defaultValue={item?.value}
                disabled
              />
            </Grid>
          );
        })}

        <Grid item xs={12} xl={6}></Grid>
        adjflsjfdljsj
      </Grid>
    </Box>
  );
}
