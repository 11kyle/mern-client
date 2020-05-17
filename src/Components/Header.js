import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid'; 
import ProfilePicture from '../man.png';
import Tabs from './SubComponents/Tabs';
import { createMuiTheme } from '@material-ui/core/styles';
import { Typography, MuiThemeProvider } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//    font-family: Quicksand,sans-serif;
// });


export default function Header() {
    // const classes = useStyles();

    return (
        <Fragment>
            <Grid
                container
                align="center"
                justify="center"
            >
                <Grid item xs={12}>
                    <img 
                        src={ProfilePicture}
                        alt="profile"
                        width="200px"
                        style={{ marginTop: "16px" }}
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
