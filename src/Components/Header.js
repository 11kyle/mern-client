import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid'; 
import ProfilePicture from '../Images/man.png';
import Tabs from './SubComponents/Tabs';
import { Typography } from '@material-ui/core';

export default function Header() {
    return (
        <Fragment>
            <Grid
                container
                align="center"
            >
                <Grid item xs={12}>
                    <img 
                        src={ProfilePicture}
                        alt="profile"
                        width="200px"
                        style={{ marginTop: "16px" }}
                    >
                    </img>
                    <Typography variant="h2">
                        Kyle Johnson
                    </Typography>
                    <Typography variant="subtitle2">
                        Full-Stack Developer
                    </Typography>
                </Grid>
            </Grid>
            <Tabs />
        </Fragment>
    );
}
