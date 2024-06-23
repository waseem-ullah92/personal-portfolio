"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { tabsStyles } from "./work-experience.style";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?:string
}

const companyName = [
  "Consultancy Outfit",
  "Cane Technologies Pvt Ltd",
  "Upwork",
];
const workExperienceData = [
  {
    id: "1",
    role: "Frontend ReactJs Developer @ Consultancy Outfit",
    date: "April, 2022 - Present",
    experienceDetails: [
      "As a Front-End developer, collaborated with team members to manage front-end development, implement logic, and facilitate client-side communication using React JS.",
      "Enhanced user interface designs, pinpointing front-end code issues to resolve bugs and optimize API queries, developed robust unit tests to validate code functionality and ensure alignment with expectations.",
      "Optimized development by creating efficient, reusable React components following industry best practices,leading to enhanced code quality. Improved application performance and user experience by implementing optimization techniques such as code splitting and lazy loading.",
      "Integrated APIs using libraries like Axios, Redux Thunk, and React Toolkit Query.",
      "Created dynamic and responsive front-end solutions using React, JavaScript, TypeScript, and Next.js,demonstrating proficiency in developing projects from inception.",
    ],
  },
  {
    id: "2",
    role: "Frontend ReactJs Developer @ Cane Technologies Pvt Ltd",
    date: "Oct, 2020 - March, 2022",
    experienceDetails: [
      "Participated in the development of React.js projects, showcasing solid foundational knowledge and a keenness for learning.",
      "Assisted in the development of reusable UI components to enhance code efficiency and maintainability. Collaborated with the team to identify and resolve technical issues while implementing enhancements.",
      "Implemented responsive design principles across applications to improve user experience across devices. Exhibited adaptability to rapidly changing project requirements, demonstrating flexibility and resilience in delivering high-quality solutions",
      "Applied proficiency in Redux and RTK Query for state management, ensuring seamless data flow and realtime updates in complex web applications.",
      "Displayed effective communication and problem-solving skills to overcome challenges and meet project deadlines.",
    ],
  },
  {
    id: "3",
    role: "Frontend developer Services @ Upwork",
    date: "April,2022 - Present",
    experienceDetails: [
      "As a Front-End developer worked with other team members, handling the front-end side development, logic implementation, and communication between client side using React.",
      "Implemented Designs and visually aesthetic user interface. Identify issues in front end code and rectify them to remove bugs. Ensure Front end code is able to query APIs. Created unit tests to ensure code is functioning as expected.",
      "Streamlined development with efficient, reusable react components adhering to best practices, resulting in improved code quality. Enhanced application loading speed and user experience through performance optimization techniques like code splitting and lazy loading.",
      "Applied proficiency in Redux and RTK Query for state management, ensuring seamless data flow and realtime updates in complex web applications.",
      "Demonstrated expertise in React.js, JavaScript,TypeScript, and Next.js to create dynamic and responsive front-end solutions that meet the highest standards of performance and usability.",
    ],
  },
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index,className, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Box>{children}</Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function WorkExperience(): JSX.Element {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const styles = tabsStyles();
  return (
    <Box>
       <Typography variant="h2" color="text.primary">Where I’ve Worked</Typography>
      <Grid container spacing={1.5}>
        <Grid item xs={12} xl={3} lg={3.5} md={3.5} width="100%">
          <Box sx={styles.common}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={styles.tabsStyle}
            >
              {companyName.map((label, index) => (
                <Tab
                  disableRipple
                  key={index}
                  label={<Typography variant="subtitle1" color="text.primary">{label}</Typography>}
                  {...a11yProps(index)}
                  sx={styles.tabStyle}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>

        <Grid item xs={12} xl={9} lg={8.5} md={8.5} width="100%">
          <Box sx={styles.common}>
            {workExperienceData?.map((experience, index) => (
              <TabPanel key={index} value={value} index={index}>
                <Typography variant="h3" color="text.primary">{experience.role}</Typography>
                <Typography variant="subtitle1" color="text.primary">{experience.date}</Typography>
                {experience?.experienceDetails.map((detail, i) => (
                  <Box display="flex" justifyContent="start" alignItems='start' flexWrap='nowrap' gap={1.6} key={i}>
                     <PlayArrowIcon sx={styles.iconStyle} />
                  <Typography variant="body1" color="text.primary">
                    {detail}
                  </Typography>
                  </Box>
                ))}
              </TabPanel>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

