import { Box } from '@mui/material'
import React from 'react'

export function SectionWrapper  ({ children, background }: any) : JSX.Element{
    return (
        <Box sx={{ background, padding: {xs:"0px 16px",sm:"0px 33px",md:"0 66px",lg:"0px 80px" ,xl:"0px 200px"}}}>
            {children}
        </Box>
    )
}

