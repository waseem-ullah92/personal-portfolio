"use client";
import React, { useRef} from "react";
import {
  Box,
  Grid,
  List,
  Theme,
  Typography,
} from "@mui/material";
// import required modules
import Image from "next/image";
import performanceImg from "../../../assets/project-images/performance-dashboard.svg";
import onboardingDashboardImg from "../../../assets/project-images/onboardingDashboard.svg";
import recruitingDashboardImg from "../../../assets/project-images/recrutingDashboard.svg";
import fosterCarerDashboardImg from "../../../assets/project-images/foster-carer-dashboard.svg";
import fosterChildDashboardImg from "../../../assets/project-images/foster-child-dashboard.svg";
import fosterSocialWorkerDashboardImg from "../../../assets/project-images/foster-social-worker-dashboard.svg";
import fosterLadoDashboardImg from "../../../assets/project-images/foster-lado-dashboard.svg";
import fosterPerspectiveDashboardImg from "../../../assets/project-images/perspective-foster-dashboard.svg";
import fosterAuditorDashboardImg from "../../../assets/project-images/foster-auditor-dashboard.svg";
import CustomCard from "@/app/components/custom-card";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MutableRefObject } from "react";

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
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <CustomCard
                sxProps={{ padding: "15px", cursor: "pointer", height: "100%" }}
              >
                <Image
                  src={performanceImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </CustomCard>
            </SwiperSlide>
            <SwiperSlide>
              <CustomCard
                sxProps={{ padding: "15px", cursor: "pointer", height: "100%" }}
              >
                <Image
                  src={onboardingDashboardImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </CustomCard>
            </SwiperSlide>
            <SwiperSlide>
              <CustomCard
                sxProps={{ padding: "15px", cursor: "pointer", height: "100%" }}
              >
                <Image
                  src={recruitingDashboardImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </CustomCard>
            </SwiperSlide>
          </Swiper>
        </Grid>

        <Grid item xs={12} xl={6.5}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <CustomCard
                sxProps={{ padding: "15px", cursor: "pointer", height: "100%" }}
              >
                <Image
                  src={fosterCarerDashboardImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </CustomCard>
            </SwiperSlide>
            <SwiperSlide>
              <CustomCard
                sxProps={{ padding: "15px", cursor: "pointer", height: "100%" }}
              >
                <Image
                  src={fosterChildDashboardImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </CustomCard>
            </SwiperSlide>
            <SwiperSlide>
              <CustomCard
                sxProps={{ padding: "15px", cursor: "pointer", height: "100%" }}
              >
                <Image
                  src={fosterSocialWorkerDashboardImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </CustomCard>
            </SwiperSlide>
            <SwiperSlide>
              <CustomCard
                sxProps={{ padding: "15px", cursor: "pointer", height: "100%" }}
              >
                <Image
                  src={fosterLadoDashboardImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </CustomCard>
            </SwiperSlide>
            <SwiperSlide>
              <CustomCard
                sxProps={{ padding: "15px", cursor: "pointer", height: "100%" }}
              >
                <Image
                  src={fosterPerspectiveDashboardImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </CustomCard>
            </SwiperSlide>
            <SwiperSlide>
              <CustomCard
                sxProps={{ padding: "15px", cursor: "pointer", height: "100%" }}
              >
                <Image
                  src={fosterAuditorDashboardImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </CustomCard>
            </SwiperSlide>
          </Swiper>
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
