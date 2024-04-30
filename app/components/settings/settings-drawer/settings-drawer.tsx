import { useCallback } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import CloseIcon from "@mui/icons-material/Close";
import Badge, { badgeClasses } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

// components

import { OptionsColorPreset } from "./options-color-preset";
import { OptionsContrast } from "./options-contrast";
import { OptionsColorScheme } from "./options-color-scheme";
import { Settings } from "@/app/components/types/settings";
import { Scrollbar } from "@/app/components/scrollbar";
import React from "react";
import { Box, Popover, Slide } from "@mui/material";

interface SettingsDrawerProps {
  canReset?: boolean;
  onClose?: () => void;
  onReset?: () => void;
  onUpdate?: (settings: Settings) => void;
  open?: boolean;
  values?: Settings;
}

export function SettingsDrawer(props: SettingsDrawerProps): JSX.Element {
  const {
    canReset,
    onClose,
    onUpdate,
    onReset,
    open = false,
    values = {},
    ...other
  } = props;

  const handleFieldUpdate = useCallback(
    (field: keyof Settings, value: unknown): void => {
      onUpdate?.({
        [field]: value,
      });
    },
    [onUpdate]
  );



  return (
    <React.Fragment>
      <Popover
        open={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        TransitionComponent={Slide} 
        transitionDuration={500} 
        sx={{
          "& .MuiPopover-paper": {
            top: "100px !important"
          }
        }}
        >
        <Scrollbar
          sx={{
            height: "100%",
            "& .simplebar-content": {
              height: "100%",
            },
            "& .simplebar-placeholder": {
              height: "0 !important",
            },
            "& .simplebar-scrollbar:before": {
              background: "var(--nav-scrollbar-color)",
            },
          }}
        >
          <Box display="flex" alignItems="center"  justifyContent="space-between" sx={{
              px: 1,
              pt: 1,
            }}>
          <Typography variant="h6" ml={1.4}>App Settings</Typography>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{
              px: 1,
              pt: 2,
            }}
          >
            <Stack alignItems="center" direction="row"  justifyContent="space-between" spacing={0.5}>
              <Badge
                anchorOrigin={{
                  horizontal: "right",
                  vertical: "top",
                }}
                color="error"
                sx={{
                  [`& .${badgeClasses.badge}`]: {
                    top: 6,
                    right: 6,
                    ...(!canReset && {
                      display: "none",
                    }),
                  },
                }}
                variant="dot"
              >
                <IconButton color="inherit" onClick={onReset}>
                  <SvgIcon fontSize="small">
                    <RefreshIcon />
                  </SvgIcon>
                </IconButton>
              </Badge>
              <IconButton color="inherit" onClick={onClose}>
                <SvgIcon>
                  <CloseIcon />
                </SvgIcon>
              </IconButton>
            </Stack>
          </Stack>
          </Box>
          <Stack spacing={3} sx={{ p: 2.5 }}>
            <OptionsColorPreset
              onChange={(value) => {
                handleFieldUpdate("colorPreset", value);
              }}
              value={values.colorPreset}
            />
            <OptionsColorScheme
              onChange={(value) => {
                handleFieldUpdate("paletteMode", value);
              }}
              value={values.paletteMode}
            />
            <OptionsContrast
              onChange={(value) => {
                handleFieldUpdate("contrast", value);
              }}
              value={values.contrast}
            />
          </Stack>

          </Scrollbar>
      </Popover>

    </React.Fragment>
  );
}
