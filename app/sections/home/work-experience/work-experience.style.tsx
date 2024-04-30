import { alpha, type Theme } from "@mui/material";

export function tabsStyles(): any {
  return {
    common: {
      py: "5px",
    //   height: "calc(100vh - 230px)",
    //   overflowY: "auto",
    //   "&::-webkit-scrollbar": {
    //     width: "5px",
    //   },
    //   "&::-webkit-scrollbar-thumb": {
    //     backgroundColor: "#cacaca",
    //     borderRadius: "10px",
    //   },
    },
    rightContentStylesWrap: {
      py: "0rem !important",
      marginTop: "-5px",
      height: "calc(100vh - 230px)",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: "5px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#cacaca",
        borderRadius: "8px",
      },
    },
    tabsStyle: (theme: Theme) => ({
      color:
        theme.palette.mode === "dark"
          ? theme.palette.neutral[100]
          : theme.palette.neutral[700],
      fontSize: "1.6rem",
      fontWeight: 400,
      marginRight: "0px !important",
      position: "relative",
      cursor: "pointer",
      "& .Mui-selected": {
        fontWeight: 600,
        color:
          theme.palette.mode === "dark"
            ? "#F2F4F7 !important"
            : "#344054 !important",
        background: alpha(theme.palette.primary.light, 0.2),
        position: "relative",
        cursor: "pointer",
        "&::before": {
          position: "absolute",
          content: "''",
          left: 0,
          top: 0,
          height: "100%",
          width: "5px",
          background: theme.palette.primary.main,
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        },
        "&::after": {
          position: "absolute",
          content: "''",
          left: "15px",
          top: "19px",
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: "50px",
          width: "10px",
          height: "10px",
        },
      },
      "& .MuiTabs-indicator": {
        display: "none",
        // left:0
      },
      "& .MuiTab-root:hover": {
        background: alpha(theme.palette.primary.light, 0.2),
      },
    }),
    tabStyle: {
      paddingLeft: "4rem",
      marginLeft: "0px !important",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      
    },
    iconStyle: (theme: Theme) => ({
      color: theme.palette.primary.main,
      fontSize: "14px",
      marginTop: "6px",
    }),
  };
}
