"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  Theme,
  useTheme,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import reactJsIcon from "../../../assets/project-images/reactIcon.svg";
import NextJsIcon from "../../../assets/project-images/nextjsIcon.svg";
import javascriptIcon from "../../../assets/project-images/javascriptIcon.svg";
import typescriptIcon from "../../../assets/project-images/typescriptIcon.svg";
import "./heros.css";
import IconReactjsFill from "@/app/assets/svg-icons/reactjs-icon";
import IconNextjs from "@/app/assets/svg-icons/nextjs-icon";
import IconJavascript from "@/app/assets/svg-icons/javascript-icon";
import IconTypescript from "@/app/assets/svg-icons/typescript-icon";
import IconCodeSSlashFill from "@/app/assets/svg-icons/dev-tag";
export function Hero(): JSX.Element {
  const theme = useTheme();
  return (
    <Box mt={4} mb={4}>
      <Grid container>
        <Grid item xs={12} lg={6} md={6} sm={12} xl={6} sx={{ width: "100%" }}>
          <Typography variant="h6" color="text.primary">
            Hi,There <WavingHandIcon />
          </Typography>
          <Typography variant="h2" color="text.primary" mt={2}>
            I'm Waseem Ullah
          </Typography>
          <Box mt={2} mb={2}>
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                800,
                "React Js Developer",
                800,
                "Next Js Developer",
                800,
              ]}
              speed={30}
              style={{ color: `${theme.palette.primary.main}` }}
              repeat={Infinity}
            />
          </Box>
          <Typography variant="h6" color="text.primary" mt={2}>
            A Passionate Front-End Web Developer skilled in crafting exceptional
            user experiences with React.js, JavaScript, TypeScript, Next.js, and
            other top-notch technologies. Committed to continuous learning and
            achieving excellence, I specialize in creating visually engaging and
            highly functional interfaces for dynamic web applications.
          </Typography>
          <Stack spacing={1} direction="row" mt={2} mb={2}>
            <Button variant="contained">My Work</Button>
            <Button variant="contained">Hire Me</Button>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} xl={6} sx={{ width: "100%" }}>
          <Box className="container">
            <Box className="hero-circle">
              {/* <Image
                src={reactJsIcon}
                alt="reactJsIcon"
                className="inner-img"
              /> */}
              <Box
                // className="inner-img"
                sx={{
                  position: "absolute",
                  top: "56%",
                  left: "56%",
                  transform: "translate(-50%,-50%)",
                  overflow: "hidden",
                  borderRadius: "10px",
                  width: "100px",
                  height: "100px",
                }}
              >
                <IconCodeSSlashFill
                  sx={{
                    width: "55px",
                    height: "55px",
                  }}
                />
              </Box>
              <Box className="hero-rotate" id="circle">
                <Box sx={styles.iconWrapStyle} className="planet">
                  <IconReactjsFill
                    sx={{
                      background: "#212121",
                      color: "#00D0EA",
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      animation: "scale 1s linear infinite alternate",
                    }}
                  />
                  {/* <Image src={reactJsIcon} alt="reactJsIcon"  style={{width:"100%", height:"100%", }}/> */}
                </Box>
                <Box sx={styles.iconWrapStyle} className="planet">
                  {/* <Image src={NextJsIcon} alt="NextJsIcon"  style={{width:"100%", height:"100%"}}/> */}
                  <IconNextjs
                    sx={{
                      background: "#f7f7f7",
                      border: "1px solid #000 !important",
                      color: "#000",
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      animation: "scale 1s linear infinite alternate",
                    }}
                  />
                </Box>
                <Box sx={styles.iconWrapStyle} className="planet">
                  {/* <Image
                    src={javascriptIcon}
                    alt="javascriptIcon"
                    style={{ width: "100%", height: "100%" }}
                    
                  /> */}
                  <IconJavascript
                    sx={{
                      backgroundColor: "#000",
                      borderColor: "none !important",
                      color: "#EFD81D",
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      animation: "scale 1s linear infinite alternate",
                    }}
                  />
                </Box>
                <Box sx={styles.iconWrapStyle} className="planet">
                  {/* <Image
                    src={typescriptIcon}
                    alt="typescriptIcon"
                    style={{ width: "100%", height: "100%" }}
                  /> */}
                  <IconTypescript
                    sx={{
                      backgroundColor: "#f7f7f7",
                      border: "none !important",
                      color: "#0076C6",
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      animation: "scale 1s linear infinite alternate",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  // typeWriterStyle: (theme: Theme) => ({
  //   color: theme.palette.primary.main,
  //   fontSize:"14px",
  // }),
  iconWrapStyle: {
    background: "#fff",
    width: "78px",
    height: "78px",
    borderRadius: "50%",
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
    border: "5px solid #fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
