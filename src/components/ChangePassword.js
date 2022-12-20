import * as React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
   
} from '@mui/material';

import BasicTabs from './Tab';
import useMediaQuery from '@mui/material/useMediaQuery';




export default function ChangePassword ({userId}){

    const [value, setValue] = React.useState(0);


    const matches = useMediaQuery('(min-width:600px)');


    return(
        <>
        <Box sx={{width:value === 0 ? '100%' : matches ? '62%' : '100%' }} >
            <Card>
                <CardContent sx={{backgroundColor:`black !important`}}>
                    <Typography 
                    variant='h5'
                    className="profile">Profile</Typography>
                    <BasicTabs value={value} setValue={setValue} userId={userId}/>
                </CardContent>
            </Card>
        </Box>
            
        </>
    )
}