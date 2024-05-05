"use client";
import React from "react";
import CustomCard from "@/app/components/custom-card";
import { Box, Typography, Grid, Stack, Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { CustomTextField, FormProvider } from "@/app/components/hook-form";
import { useContact } from "./use-contact";

export default function ContactUs(): JSX.Element {
  const { onSubmit, handleSubmit, methods } = useContact();
  return (
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
            LET’S TALK FOR YOUR NEXT PROJECTS
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
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={2}
            >
              <EmailOutlinedIcon />
              <Typography variant="body1">waseemullah.wsm@gmail.com</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={2}
            >
              <EmailOutlinedIcon />
              <Typography variant="body1">waseemullah.wsm@gmail.com</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} xl={7}>
          <CustomCard  sxProps={{ padding:"15px"}}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xl={12} xs={10}>
                  <CustomTextField
                    fullWidth
                    name="firtsName"
                    label="First Name"
                    placeholder="Enter First Name"
                  />
                </Grid>
                <Grid item xl={12} xs={10}>
                  <CustomTextField
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter Last Name"
                  />
                </Grid>
                <Grid item xl={12} xs={10}>
                  <CustomTextField
                    fullWidth
                    name="email"
                    label="Email"
                    placeholder="Enter Email"
                  />
                </Grid>
                <Grid item xl={12} xs={10}>
                  <CustomTextField
                    fullWidth
                    name="projectDetail"
                    label="Project Detail"
                    placeholder="Enter Project Details..."
                    multiline={true}
                    minRows={3}
                  />
                </Grid>
                <Grid item xl={10} xs={10}>
                <Box>
                <Button variant="contained" type="submit">Submit</Button>
                </Box>
                </Grid>
              </Grid>

            </FormProvider>
          </CustomCard>
        </Grid>
      </Grid>
    </Box>
  );
}
