import React from 'react';
import {
    Typography,
    Grid,
    Paper,
    Box,
    Link
} from '@material-ui/core';

export default function About() {
    return(
        <Grid
            container
        >
            <Grid item sx={12} style={{width: "600px", margin: "0 auto"}}>
                <Paper elevation={2}>
                    <Box p={2} mt={2}>
                        <Typography variant="h6">About Page</Typography>
                        <Typography variant="body1">
                        Hi, I'm Kyle, your front-end web developer! Well, I'm your guy if you're looking for a friendly, talented front-end web developer. Feel free to check out my recent work and if you have any questions, please contact me through my 
                            <Link 
                                href="https://www.linkedin.com/in/kylejohnson11/"
                                target="_blank"
                                rel="noopener"
                            > LinkedIn
                            </Link>.
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid> 
    );
}