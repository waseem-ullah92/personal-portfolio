import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField } from "@mui/material";

// ----------------------------------------------------------------------

export default function CustomTextField({disabled,multiline,label,placeholder, name,  ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
        {label && (
               <label   style={{ color: disabled ? '#4B5563' : '#4B5563',fontSize:"14px",lineHeight:"20PX",fontWeight:"400",textTransform:"capitalize",marginBottom:"5px" }}>
                  {label}
              </label>
           )}
        <TextField
        disabled={disabled}
          {...field}
          error={!!error}
          helperText={error?.message}
          {...other}
          autoComplete="off" 
          multiline={multiline}
          inputProps={{
            style: {
              color: "#224957",
              fontSize: "14px",
              lineHeight: "20PX",
              fontWeight: "400",
              // textTransform: "capitalize",
            },
            placeholder: placeholder,
            rows: other.minRows || 3,
          }}
          onChange={(e) => {
            const trimmedValue = e.target.value.trim();
            field.onChange(trimmedValue);
          }}
        />
          </>
      )}
    
    />
  );
}
