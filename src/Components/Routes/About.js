import React from 'react';
import {
    Typography,
    Grid,
    Paper,
    Box
} from '@material-ui/core';

export default function About() {
    return(
        <Grid
            container
        >
            <Grid item sx={12} style={{maxWidth: "600px", margin: "0 auto"}}>
                <Paper elevation={2}>
                    <Box p={2} mt={2}>
                        <Typography variant="h6">About Page</Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid> 
    );
}