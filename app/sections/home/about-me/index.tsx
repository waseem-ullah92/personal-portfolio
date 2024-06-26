"use client";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CustomCard from "@/app/components/custom-card";
import Image from "next/image";
import aboutMe from '../../../assets/project-images/about.png'

export function AboutMe(): JSX.Element {
  const styles = aboutStyle();
  const aboutData = [
    "React JS",
    "Next JS",
    "JavaScript",
    "TypeScript",
    "Redux",
    "RTK Query",
    "Material UI",
    "Ant Design",
    "Tailwind CSS",
    "Styled Components",
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={6}>
          <Typography variant="h2" color="text.primary" mt={2} mb={2}>
            About Me
          </Typography>
          <Typography variant="body1" color="text.primary" mt={3}>
            Hello! I'm Waseem Ullah, a Passionate and result driven Front-End
            Web Developer with a demonstrated history of crafting outstanding
            user experiences using top-notch code in dynamic web applications.
            Actively pursuing challenging opportunities to apply my expertise in
            React.js, JavaScript, TypeScript, Next.js, and other
            state-of-the-art front-end technologies. Committed to ongoing
            learning, I possess a fervor for achieving excellence and a
            steadfast dedication to propelling significant progress in web
            development. My focus lies in creating visually engaging and
            exceptionally functional user interfaces that elevate the overall
            digital experience.
          </Typography>
          <Typography variant="body1" color="text.primary" mt={1} mb={2}>
            Here are a few technologies I’ve been working with recently:
          </Typography>
            <List>
            <Grid container spacing={2}>
              {aboutData?.map((item) => {
                return (
                  <Grid key={item} xl={6} lg={6} md={6} xs={6}>
                  <Box display='flex' justifyContent='start' alignItems="center" flexWrap='nowrap' gap={1} p={1}>
                    {/* <ListItemIcon> */}
                      <PlayArrowIcon sx={styles.iconStyle} />
                    {/* </ListItemIcon> */}
                    <Typography variant="subtitle2" color="text.primary">{item}</Typography>
                  </Box>
                  </Grid>
                )
              })}
            </Grid>
            </List>
        </Grid>
        <Grid item xs={12} xl={6} display = 'flex' justifyContent='center'>
          <CustomCard sxProps={{width:"60%", height:"60%", display:"flex", justifyContent:"center", aligItems:"center"}}>
            <Image src={aboutMe} alt="about-me" style={{width:"70%", height:"70%"}} priority/>
          </CustomCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export function aboutStyle(): any {
  return {
    iconStyle: (theme: Theme) => ({
      color: theme.palette.primary.main,
      fontSize:"14px",
    }),
  };
}
