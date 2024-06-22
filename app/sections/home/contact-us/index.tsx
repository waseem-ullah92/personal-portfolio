"use client";
import React from "react";
import CustomCard from "@/app/components/custom-card";
import { Box, Typography, Grid, Stack, Button, Theme, alpha } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { CustomTextField, FormProvider } from "@/app/components/hook-form";
import { useContact } from "./use-contact";

export default function ContactUs(): JSX.Element {
  const { onSubmit, handleSubmit, methods } = useContact();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <Box flexGrow={1}>
      <Typography variant="h3" mb={5} mt={5}>
        Contact US
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={5}>
          <Typography variant="body1" mb={2} mt={2}>
            Get In Touch
          </Typography>
          <Typography variant="h4" mb={2} mt={2}>
            Let’S Talk For Your Projects
          </Typography>
          <Typography variant="body2" mb={2} mt={2}>
            Let’s make something new, different, and more meaningful or make
            things more visual or conceptual.
          </Typography>

          <Typography variant="body1" mb={2} mt={2}>
            I'm available at
          </Typography>
          <Stack spacing={2}>
            <Box
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
            >
              <EmailOutlinedIcon />
              <Typography variant="body1">waseemullah.wsm@gmail.com</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
            >
              <EmailOutlinedIcon />
              <Typography variant="body1">waseemullah.wsm@gmail.com</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} xl={7} sx={styles.boxStyle}>
              <Grid container spacing={2} sx={{width:"100%"}}>
                <Grid item xl={6} xs={12}>
                  <CustomTextField
                    fullWidth
                    name="firstName"
                    outerLabel="First Name"
                    placeholder="Enter First Name"
                  />
                </Grid>
                <Grid item xl={6} xs={12}>
                  <CustomTextField
                    fullWidth
                    name="lastName"
                    outerLabel="Last Name"
                    placeholder="Enter Last Name"
                  />
                </Grid>
                <Grid item xl={6} xs={12}>
                  <CustomTextField
                    fullWidth
                    name="email"
                    outerLabel="Email"
                    placeholder="Enter Email"
                  />
                </Grid>
                <Grid item xl={6} xs={12}>
                  <CustomTextField
                    fullWidth
                    name="phoneNumber"
                    outerLabel="Phone Number"
                    placeholder="Enter Phone Number"
                  />
                </Grid>
                <Grid item xl={12} xs={12}>
                  <CustomTextField
                    fullWidth
                    name="description"
                    outerLabel="Project Detail"
                    placeholder="Enter Project Details here..."
                    multiline={true}
                    minRows={3}
                  />
                </Grid>
                <Grid item xl={10} xs={10} mb={4}>
                <Button variant="contained" type="submit">Submit</Button>
                </Grid>
              </Grid>
           
        </Grid>
      </Grid>
    </Box>
    </FormProvider>
  );
}


const styles ={
  boxStyle:(theme: Theme) => ({
    background: alpha(theme.palette.primary.light, 0.2),
    border:"none ",
    borderRadius:"16px"
  })
}