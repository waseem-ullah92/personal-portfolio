"use client";
import CustomCard from "@/app/components/custom-card";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import codeImg from "../../../assets/project-images/pl-code.jpg";
import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function ProfessionalProjects(): JSX.Element {
  // const theme = useTheme()
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xl={3} xs={12}>
          <CustomCard>
            <Box>
              <Image
                src={codeImg}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <CardContent
              sx={{
                padding: "0px",
                "& .MuiCardContent-root": {
                  padding: "0px 0px !important",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <OpenInNewIcon/>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CustomCard>
        </Grid>

        <Grid xl={3} xs={12}>
          <CustomCard sxProps={{ overflow: "hidden" }}>
            <CardMedia>
              <Image
                src={codeImg}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  // background: `url(img.jpg) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </CardMedia>
            <Box className="content">
              <CardContent
                className=""
                sx={{ zIndex: "2", position: "relative", padding: "20px" }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="para"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Box>
          </CustomCard>
        </Grid>
      </Grid>
    </Box>
  );
}

