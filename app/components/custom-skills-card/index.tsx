import React from "react";
import CustomCard from "@/app/components/custom-card";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ISkillsProps {
  imgIcon: any;
  title: any;
}

const CustomSkillsCard: React.FC<ISkillsProps> = ({
  imgIcon,
  title,
}) => {
  return (
    <CustomCard sxProps={{ width: "120px", height: "120px", cursor: "pointer" }}>
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
          <Image src={imgIcon} alt="skill icon" priority layout="fill" />
        </Box>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </CustomCard>
  );
};

export default CustomSkillsCard;
