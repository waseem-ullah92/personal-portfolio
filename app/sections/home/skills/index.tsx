"use client";
import React, { useState } from "react";
import { Box, Tabs, Tab, Grid, Typography } from "@mui/material";
import TechnicalSkills from "./technical-skills";
import FrameWorksAndLibraries from "./framework-and-libraries";
import SoftSkills from "./developers-tools";
import { tabStyles } from "./skills-tabs-styles";
import DeveloperTools from "./developers-tools";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
const tabsArray = [
  { id: "1", label: "Technical Skills", component: <TechnicalSkills /> },
  {
    id: "2",
    label: "Fameworks & Libraries",
    component: <FrameWorksAndLibraries />,
  },
  { id: "3", label: "Developer Tools ", component: <DeveloperTools /> },
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function MySkills(): JSX.Element {
  const [value, setValue] = useState<number | null>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const styles= tabStyles()
  return (
    <Box flexGrow={1}>
      <Typography variant="h3" mb={5} mt={4} textAlign='center'>Skills</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12} sx={styles.containerWrapper}>
          <Box sx={styles.tabsWrapper}>
            <Tabs
              classes={{ root: "_root", indicator: "_indicator" }}
              value={value}
              onChange={handleChange}
              variant="scrollable"
            >
              {tabsArray.map((tab, index) => (
                <Tab
                  disableRipple
                  classes={{ root: "tab_root", selected: "_selected" }}
                  key={index}
                  label={tab.label}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={12} xl={12}>
          {tabsArray?.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              {tab.component}
            </TabPanel>
          ))}
       </Grid>
      </Grid>
    </Box>
  );
}
