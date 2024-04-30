'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { cardStyles } from './custom-card-styles';


// Define interface for props
interface ICardProps {
    // title?: string;
    // content?: string;
    // actions?: React.ReactNode;
    children?: React.ReactNode;
    sxProps?: object;
  }
  
export default function CustomCard( props:ICardProps ) {
    const {children,sxProps} = props
    const styles = cardStyles()
  return (
    <Card  sx={{...styles.card,...sxProps}}>
      <CardContent>
       {children} 
      </CardContent>
      
    </Card>
  );
}
