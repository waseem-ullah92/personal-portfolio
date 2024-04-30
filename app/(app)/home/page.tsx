import { RightSideList, SocialLeftSideList } from "@/app/layout/social-left-right-list";
import Home from "@/app/sections/home";
import { Grid } from "@mui/material";
import React from "react";

function HomePage(): JSX.Element {
  return (<Home/>
      // <Grid container spacing={2}>
      //   <Grid item xl={1}>
      //    <SocialLeftSideList/>
      //   </Grid>
      //   <Grid item xl={10}>
      //   <Home/>
      //   </Grid>
      //   <Grid item xl={1}>
      //   <RightSideList/>
      //   </Grid>
      // </Grid>
  );
}

export default HomePage;
