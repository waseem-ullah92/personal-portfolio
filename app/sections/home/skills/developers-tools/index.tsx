"use client";

import CustomCard from "@/app/components/custom-card";
import { Box ,Grid, Typography } from "@mui/material";
import { developersToolsData } from "./developer-tools-data";
import Image from "next/image";

export default function DeveloperTools(): JSX.Element {
  return  <Box flexGrow={1}>
  <Grid container spacing={2}>
    {developersToolsData?.map((item) => {
      return (
        <Grid item xs={12} xl={1.5} key={item?.id}>
          <CustomCard
            key={item?.id}
            sxProps={{ width: "120px", height: "120px", cursor: "pointer" }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              gap={1}
            >
              <Box
                mt={2}
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
              <Typography variant="subtitle1">{item?.title}</Typography>
            </Box>
          </CustomCard>
        </Grid>
      );
    })}
  </Grid>
</Box>
}
