import { alpha } from "@mui/material";
import type { Theme } from "@mui/material";

export function tabStyles():any  {
    return{
    containerWrapper:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    tabsWrapper: (theme: Theme) => ({
        background:  theme.palette.mode === "dark" ? theme.palette.neutral[900] : theme.palette.common.white,
        borderRadius: '160px',
        display: 'inline-block',
        border: `1px solid ${theme.palette.neutral[200]}`,
        padding: '4px',
        marginBottom: '24px',
        '& ._indicator': {
            height: '100%',
            background: theme.palette.mode === "dark"?  alpha(theme.palette.neutral[500], 0.3) : theme.palette.primary.main,
            boxShadow: `0px 2px 8px rgba(0, 0, 0, 0.15) ${alpha(theme.palette.neutral[900], 0.05)}`,
            borderRadius: '160px',
        },
        '& ._root, ': { minHeight: 'unset', maxWidth: '100%' },
        '& .tab_root': {
            marginLeft: '0px !important',
            zIndex: 1,
            padding: '6.5px 20px',
            minHeight: 'unset',
            textTransform: 'capitalize',
            color: theme.palette.neutral[400],
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
            '&._selected': {
                color: theme.palette.mode === "dark" ? theme.palette.neutral[900] : theme.palette.common.white
            }
        },
    })
}
}