import * as React from "react";
import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}



function IconCodeSSlashFill(props: IconProps): JSX.Element {
    const { width = "2.4rem", height = "2.4rem", sx = {}  } = props;
  return (
    <SvgIcon sx={{ width, height, ...sx }}>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" />
    </svg>
    </SvgIcon>
  );
}

export default IconCodeSSlashFill;
