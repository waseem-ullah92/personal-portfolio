import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField, Stack, FormLabel } from "@mui/material";

// ----------------------------------------------------------------------

export default function CustomTextField({
  outerLabel,
  multiline,
  label,
  placeholder,
  type = "text",
  variant = "outlined",
  readOnly = false,
  fullWidth = true,
  name,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack gap="0.6rem">
          {outerLabel && <FormLabel>{outerLabel}</FormLabel>}
          <TextField
            {...field}
            error={!!error}
            helperText={error?.message}
            autoComplete="off"
            multiline={multiline}
            inputProps={{
              placeholder: placeholder,
              rows: other.minRows || 3,
            }}
            InputProps={{
              readOnly,
            }}
            fullWidth={fullWidth}
            {...other}
            onChange={(e) => {
              const trimmedValue = e.target.value.trim();
              field.onChange(trimmedValue);
            }}

            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px !important",
                height: multiline?"none" :"44px !important",
              },
              "& .MuiOutlinedInput-input::placeholder": { 
                color: "#9CA3AF", 
                fontWeight:"400 !important",
                fontSize:"14px !important",
                lineHeight:"20px",
                letterSpacing:"-0.28px",
                fontFamily: 'Poppins !important',
              },
            }}
          />
        </Stack>
      )}
    />
  );
}
