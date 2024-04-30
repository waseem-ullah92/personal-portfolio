import { Box, Divider, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export function SocialLeftSideList() {
  return (
    <Box sx={styles.leftIconsStyles}>
      <LinkedInIcon />
      <GitHubIcon />
      <EmailIcon />
      <Divider
        orientation="vertical"
        variant="fullWidth"
        sx={{ border: "1px solid #a8b2d1 !important", height: "200px" }}
      />
    </Box>
  );
}

export function RightSideList() {
  return (
    <Box sx={styles.leftIconsStyles}>
      <Typography sx={styles.textStyle}>Waseem Ullah</Typography>
      <Divider
        orientation="vertical"
        variant="fullWidth"
        sx={{ border: "1px solid #a8b2d1 !important", height: "200px" }}
      />
    </Box>
  );
}

const styles = {
  leftIconsStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  textStyle: {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
  },
};
