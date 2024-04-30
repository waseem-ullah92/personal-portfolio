"use client";
import { Box, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "../professional-projects/project.css";
import { MutableRefObject, useRef } from "react";
import { projectStyle } from "../featured-projects";

import performanceImg from "../../../assets/project-images/performance-dashboard.svg";
import onboardingDashboardImg from "../../../assets/project-images/onboardingDashboard.svg";
import recruitingDashboardImg from "../../../assets/project-images/recrutingDashboard.svg";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CustomCard from "@/app/components/custom-card";
import codeImg from "../../../assets/project-images/pl-code.jpg";

export default function Service(): JSX.Element {
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
    <Box>
      <CustomCard>
        <Typography>Personal Library</Typography>
        <Box sx={{ position: "relative", zIndex: "1" }}>
          <Image
            src={codeImg}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={performanceImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={onboardingDashboardImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={recruitingDashboardImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        </Swiper>
      </CustomCard>
    </Box>
  );
}
