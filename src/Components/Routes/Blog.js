import React from 'react';
import Grid from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper';
import { Typography, Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Blog() {
    return(
        <Grid
            container
            spacing={0}
            alignItems="stretch"
            alignContent="center"
            direction="column"
            mt="1"
        >
            <Grid item xs={11} mx="auto">
                <Box maxWidth="600px">
                <Paper elevation={2}>
                    <Box m={2}>
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
                </Box>
            </Grid>

            <Grid item xs={11} mx="auto">
                <Box maxWidth="600px">
                <Paper elevation={2}>
                    <Box m={2}>
                        <Typography variant="h6">
                            What to do next?
                        </Typography>
                        <Typography variant="subtitle2">
                            Monday, Aug 27 2017 8:56 PM
                        </Typography>
                        <Typography>
                            Author: Kyle Johnson
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="1. Add functionality to the tag checkboxes." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="2. Add form validation." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="3. Change two-button format to a single-button format that switches functionality from creating a new post to updating an existing post." />
                            </ListItem>
                        </List>
                    </Box>
                </Paper>
                </Box>
            </Grid>

            <Grid item xs={11} mx="auto">
            <Box maxWidth="600px">
                <Paper elevation={2}>
                    <Box m={2}>
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
                </Box>
            </Grid>
        </Grid>
    );
}