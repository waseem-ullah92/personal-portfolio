"use client";
import CustomCard from "@/app/components/custom-card";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Theme,
  Typography,
  alpha,
} from "@mui/material";
import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projectsMockData } from "./professional-projects-mock-data";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function ProfessionalProjects(): JSX.Element {
  const swiperRef = useRef<SwiperType>();

  return (
    <Box>
      <Typography variant="h3" mb={5} mt={4}>
        Other Projects
      </Typography>
      <Grid container spacing={2}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[FreeMode, Navigation, Pagination]}
          className="mySwiper"
        >
          {projectsMockData?.map((item: any) => {
            return (
              <Grid item xl={4} xs={12} key={item?.id}>
                <SwiperSlide style={{ background: "none !important" }}>
                  <CustomCard sxProps={{ padding: "15px", cursor: "pointer" }}>
                    <CardMedia>
                      <Image
                        src={item?.image}
                        alt=""
                        priority
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "8px",
                          border: "2px solid",
                        }}
                      />
                    </CardMedia>
                    <CardContent
                      sx={{
                        padding: "0px !important",
                        "& .MuiCardContent-root": {
                          padding: "0px 0px !important",
                        },
                      }}
                    >
                      <Box sx={styles.contentStyle}>
                        <Typography gutterBottom variant="body1">
                          {item?.title}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                          <GitHubIcon sx={{ cursor: "pointer" }} />
                          <OpenInNewIcon sx={{ cursor: "pointer" }} />
                        </Stack>
                      </Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {item?.projectDescription}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </CustomCard>
                </SwiperSlide>
              </Grid>
            );
          })}
        </Swiper>
          <Grid item xs={12} xl={12}>
          <Box sx={styles.iconWrap}>
          <IconButton onClick={() => swiperRef.current?.slidePrev()}>
          <ArrowCircleLeftOutlinedIcon sx={styles.iconStyles}/>
          </IconButton>
         
          <IconButton onClick={() => swiperRef.current?.slideNext()}>
          <ArrowCircleRightOutlinedIcon sx={styles.iconStyles}/>
          </IconButton>
        </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  imageStyle: (theme: Theme) => ({
    color: alpha(theme.palette.primary.light, 0.2),
    fontSize: "14px",
  }),
  contentStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap:"6px"
  },
  iconStyles: (theme: Theme) => ({
    color: theme.palette.primary.main,
    fontSize: "30px",
  }),
};
