import { ColorPreset } from "@/app/components/types/theme";
import { green , blue, indigo, purple, yellow } from "@/theme";
// import { blue, green, indigo, purple, yellow } from "@/theme";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Option {
  label: string;
  value: ColorPreset;
  color: string;
}

interface OptionsColorPresetProps {
  onChange?: (value: ColorPreset) => void;
  value?: ColorPreset;
}

export function OptionsColorPreset(
  props: OptionsColorPresetProps
): JSX.Element {
  const { onChange, value } = props;

  const options: Option[] = [
    {
      label: "Green",
      value: "green",
      color: green.main,
    },
    {
      label: "Blue",
      value: "blue",
      color: blue.main,
    },
    {
      label: "Indigo",
      value: "indigo",
      color: indigo.main,
    },
    {
      label: "Purple",
      value: "purple",
      color: purple.main,
    },
    {
      label: "Yellow",
      value: "yellow",
      color: yellow.main,
    },
  ];

  return (
    <Stack spacing={1}>
      <Typography color="text.secondary" variant="overline">
        Primary Color
      </Typography>
      <Stack alignItems="center" direction="row" flexWrap="wrap" gap={2}>
        {options.map((option) => (
          <Chip
            icon={
              <Box
                sx={{
                  backgroundColor: option.color,
                  borderRadius: "50%",
                  flexShrink: 0,
                  height: 24,
                  width: 24,
                }}
              />
            }
            key={option.value}
            label={option.label}
            onClick={() => onChange?.(option.value)}
            sx={{
              borderColor: "transparent",
              borderRadius: 1.5,
              borderStyle: "solid",
              borderWidth: 2,
              ...(option.value === value && {
                borderColor: "primary.main",
              }),
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}
