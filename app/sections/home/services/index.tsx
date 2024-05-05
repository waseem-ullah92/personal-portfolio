"use client";
import CustomCard from "@/app/components/custom-card";
import { Box, Typography,Grid } from "@mui/material";
import Image from "next/image";
import { servicesData } from "./services-data";



export default function Service(): JSX.Element {
  
  return (
    <Box flexGrow={1}>
      <Typography variant="h3" mb={5} mt={5}>Services</Typography>
      <Grid container spacing={2}>
        {servicesData?.map((item) => {
          return (
            <Grid item xs={12} xl={4} key={item?.id}>
              <CustomCard
                key={item?.id}
                sxProps={{padding:"15px",cursor: "pointer" ,height:"100%" }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  flexDirection="column"
                  gap={1}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "none",
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    <Image
                      src={item?.imgIcon}
                      alt="skill icon"
                      priority
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Typography variant="h6">{item?.title}</Typography>
                  <Typography variant="body2" fontWeight="500">{item?.description}</Typography>
                </Box>
              </CustomCard>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
