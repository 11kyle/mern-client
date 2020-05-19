import React from 'react';
import { 
    Grid,
    Link,
    makeStyles 
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles({
    root: {
        backgroundColor: "inherit",
        width: "100px",
        margin: "0 auto",
    },
    overrides: {
        margin: "16px",
        fill: "inherit",
    },
})

export default function Footer() {

    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Grid
            container
            justify="center"
        >
            <Link
                href="https://github.com/11kyle"
                onClick={preventDefault}    
            >
                <GitHubIcon className={classes.overrides} fontSize="large" />
            </Link>
            <Link
                href="https://www.linkedin.com/in/kylejohnson11"
                onClick={preventDefault}    
            >
                <LinkedInIcon className={classes.overrides} fontSize="large" />
            </Link>
            <Link
                href="#"
                onClick={preventDefault}    
            >
                <PictureAsPdfIcon className={classes.overrides} fontSize="large" />
            </Link>
        </Grid>
    );
}