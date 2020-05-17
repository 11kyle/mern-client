import React from 'react';
import Grid from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper';
import { Typography, Box } from '@material-ui/core';

export default function Blog() {
    return(
        <Grid
            container
            direction="column"
            alignContent="center"
            spacing={0}
        >
            <Grid item xs={12}>
                <Paper elevation={2} style={{maxWidth: "600px" }}>
                    <Box p={2} mt={2}>
                        <Typography variant="h6">
                            Tutorial: How to setup and connect mLab.
                        </Typography>
                        <Typography variant="subtitle2">
                            Thursday, Sep 21, 2017 8:37 PM
                        </Typography>
                        <Typography>
                            Author: Kyle Johnson
                        </Typography>
                        <Typography>
                            Stay tuned for a step by step guide on how setup and connect mLab.
                        </Typography>
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper elevation={2} style={ {maxWidth: "600px" }}>
                    <Box p={2} mt={2}>
                        <Typography variant="h6">
                            Welcome!
                        </Typography>
                        <Typography variant="subtitle2">
                            Monday, Aug 7, 2017 5:16 PM
                        </Typography>
                        <Typography>
                            Author: Kyle Johnson
                        </Typography>
                        <Typography>
                        Welcome to my blog. Built with the MEAN stack, this is my way of showing off my skills. What is the MEAN stack? The MEAN stack is a complete JavaScript stack using MongoDB, Express.js, Angular.js and Node.js. MongoDB is a NoSQL database. Express.js and Node.js are back-end frameworks. Angular.js is the front-end framework. Put these together and you get this great blogging platform! Get it for yourself here.
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}