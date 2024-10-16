"use client";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export function Hero(): JSX.Element {
  const theme = useTheme();
 
  return (
    <Box mt={4} mb={4}>
      <Grid container>
        <Grid item xs={12} lg={12} md={12} sm={12} xl={12} sx={{ width: "100%" }}>
          <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h3" color="text.primary">
            Hi,There 
            </Typography>
            <motion.div
            
              style={{
                display: "inline-block",
                transformOrigin: "bottom center",
              }}
              animate={{
                rotate: [0, -20, 20, -20, 20, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <WavingHandIcon sx={{color:"#FFC83D", fontSize:"40px"}}/>
            </motion.div>
            </Box>
      
          <Typography variant="h1" color="text.primary" mt={2}>
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
              style={{ color: `${theme.palette.primary.main}`, fontSize:"2.2rem", fontWeight:600 }}
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
      </Grid>
    </Box>
  );
}
