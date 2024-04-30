
import type { Theme } from '@mui/material';

export function cardStyles(): any {
  return {
    card: ({ palette: { neutral } }: Theme) => ({
      borderRadius: "10px !important",
      border: `1px solid ${(neutral[100])}`,
      padding: 0,
      height:"100%"
    }),
   
  };
}


