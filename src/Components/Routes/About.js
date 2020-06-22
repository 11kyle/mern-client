import React from 'react';
import {
    Typography,
    Grid,
    Box,
    List,
    ListItem,
    ListItemText,
    Chip,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            borderRadius: "10% / 50%",
        }
    },
}));

export default function About() {

    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid item sm={12}>
                <Box p={2} my={4} align="center" color="white" bgcolor="primary.main" className={classes.root}>
                    <Typography variant="h5" gutterBottom>Hi, I'm Kyle. Nice to meet you.</Typography>
                    <Typography>Full-stack developer with 5+ years experience in internet technologies and 30+ years experience of being an all-around nice guy. Be sure to check out my portfolio for recent work and my blog for tutorials.</Typography>
                </Box>
            </Grid>

            <Grid item sm={12}>
                <Box p={2} my={4}>
                    <Typography variant="h4" align="center">Skills</Typography>
                    <Grid container align="center">
                        <Grid item sm={6}>
                            <Typography variant="h6" color="primary">Front-End</Typography>
                            <Chip label="HTML5" variant="outlined" />
                            <Chip label="CSS3" variant="outlined" />
                            <Chip label="Javascript" variant="outlined" />
                            <Chip label="React" variant="outlined" />
                            <Chip label="Material-Ui" variant="outlined" />
                            <Chip label="Chrome Dev Tools" variant="outlined" />
                            <Chip label="Bootstrap" variant="outlined" />
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="h6" color="primary">Back-End</Typography>
                            <Chip label="Node.js" variant="outlined" />
                            <Chip label="Express.js" variant="outlined" />
                            <Chip label="MongoDB" variant="outlined" />
                            <Chip label="Git & GitHub" variant="outlined" />
                            <Chip label="Cypress.io" variant="outlined" />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            <Grid item sm={6}>
                <Box p={2} my={4}>
                    <Typography variant="h4" align="center">Education</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="University of Denver" secondary="Bootcamp Computer Software Engineering" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="University of Wisconsin - Stout" secondary="BS Mechanical Engineering" />
                        </ListItem>
                    </List>
                </Box>
            </Grid>        
        </React.Fragment>
    );
}