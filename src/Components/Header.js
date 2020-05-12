import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid'; 
import ProfilePicture from '../man.png';
import Tabs from './SubComponents/Tabs';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    primaryColor: { 
        backgroundColor: '#F15725',
        color: '#fff'
    },
    secondaryColor: {
        color: '#000'
    },
    jumbotron: {
        padding: '3em 5em',
        backgroundColor: '#F15725',
        color: '#fff'
    }
});

export default function Header() {
    const classes = useStyles();

    return (
        <Fragment>
        <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            direction="column"
        >
            <Grid item>
                <img 
                     src={ProfilePicture}
                     alt="profile picture"
                     width="200px"
                 >
                 </img>
                <Typography variant="h2" align="center">
                    Kyle Johnson
                </Typography>
                <Typography variant="subtitle2" align="center">
                    Full-Stack Developer
                </Typography>
            </Grid>
        </Grid>
        <Tabs />
        </Fragment>
    );
}
