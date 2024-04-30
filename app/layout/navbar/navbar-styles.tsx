import type { Theme } from "@mui/material";

export function NavbarStyles(): any {
  return {
    buttonStyle: {
      transform: "rotate(-25deg) skew(25deg)",
      transformStyle: "preserve-3d",
      position: "relative",
      listStyle: "none",
      width: "100px",
      height: "32px",
      border: "1px solid #64FFDA",
      background: "transparent",
      fontFamily: "inherit",
      cursor: "pointer",
      "&:before": {
        content: '""',
        position: "absolute",
        bottom: "-10px",
        left: "-5px",
        width: "100%",
        height: "10px",
        background: "#64FFDA",
        transform: "skewX(-41deg)",
      },
      "&:after": {
        content: '""',
        position: "absolute",
        top: "5px",
        left: "-9px",
        width: "9px",
        height: "100%",
        background: "#64FFDA",
        transform: "skewY(-49deg)",
      },
      "& span": {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "#64FFDA",
        color: "#fff",
        fontSize: "25px",
        transition: "1.1s ease-out",
      },
      "&:hover span": {
        zIndex: "1000",
        transition: ".3s",
        color: "#fff",
      },
      "&:hover span:nth-child(5)": {
        transform: "translate(40px, -40px)",
        opacity: "1",
      },
      "&:hover span:nth-child(4)": {
        transform: "translate(30px, -30px)",
        opacity: ".8",
      },
      "&:hover span:nth-child(3)": {
        transform: "translate(20px, -20px)",
        opacity: ".6",
      },
      "&:hover span:nth-child(2)": {
        transform: "translate(10px, -10px)",
        opacity: ".4",
      },
      "&:hover span:nth-child(1)": {
        transform: "translate(0px, 0px)",
        opacity: ".2",
      },
      "&:active span:nth-child(5)": {
        transform: "translate(20px, -20px)",
        opacity: "1",
      },
      "&:active span:nth-child(4)": {
        transform: "translate(15px, -15px)",
      },
      "&:active span:nth-child(3)": {
        transform: "translate(10px, -10px)",
      },
      "&:active span:nth-child(2)": {
        transform: "translate(5px, -5px)",
      },
      "&:active span:nth-child(1)": {
        transform: "translate(0px, 0px)",
      },
      "&:nth-child(1):hover span": {
        background: "#64FFDA",
      },
    },
  };
}
