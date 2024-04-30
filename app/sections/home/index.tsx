import { Box, Grid } from "@mui/material";
import { Hero } from "./hero-section";
import { AboutMe } from "./about-me";
import WorkExperience from "./work-experience";
import { SectionWrapper } from "@/app/components/section-wrapper";
import { FeaturedProjects } from "./featured-projects";
import Service from "./services";
import MySkills from "./skills";
import ProfessionalProjects from "./professional-projects";

export default function Home() {
  return (
    <Box flexGrow={1}>
      {/* <SectionWrapper background="#0A192F"> */}
      <SectionWrapper>
        <Grid container>
          <Grid xs={12} xl={12}>
            <Hero />
          </Grid>
          <Grid xs={12} xl={12} mt={3}>
            <AboutMe />
          </Grid>
          <Grid xs={12} xl={12} mt={4}>
            <WorkExperience />
          </Grid>
          <Grid xs={12} xl={12} mt={4}>
          <FeaturedProjects/>
          </Grid>
          <Grid xs={12} xl={12} mt={4}>
            <ProfessionalProjects/>
          </Grid>
          <Grid xs={12} xl={12} mt={4}>
            <MySkills/>
          </Grid>
          <Grid xs={12} xl={12} mt={4}>
            <Service/>
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
}
