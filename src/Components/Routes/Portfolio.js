import React from 'react';
import { 
    Grid,
    Box,
    makeStyles,
} from '@material-ui/core';
import PortfolioDesktop01 from '../../Images/portfolio-desktop-01.png';
import PortfolioDesktop02 from '../../Images/portfolio-desktop-02.png';

const useStyles = makeStyles({
    root: {
        marginTop: "16px",
    },
    media: {
        maxWidth: "100%",
        height: "auto",
    },
});

export default function Portfolio() {

    const classes = useStyles();

    return(
        // <Grid 
        //     container 
        //     alignItems="stretch"
        //     justify="center"
        //     spacing={1}
        //     className={classes.root}
        // >
        <React.Fragment>
            <Grid item sm={5}>
                <Box mt={4} px={2} border="1px solid #000">
                    <img src={PortfolioDesktop01} alt="A website Kyle built." className={classes.media} />  
                </Box>
            </Grid>
            <Grid item sm={5}>
                <Box mt={4} px={2} border="1px solid #000">
                    <img src={PortfolioDesktop02} alt="A website Kyle built." className={classes.media} />
                </Box>
            </Grid>
            <Grid item sm={5}>
                <Box mt={4} px={2} border="1px solid #000">
                    <img src={PortfolioDesktop01} alt="A website Kyle built." className={classes.media} />  
                </Box>
            </Grid>
            <Grid item sm={5}>
                <Box mt={4} px={2} border="1px solid #000">
                    <img src={PortfolioDesktop02} alt="A website Kyle built." className={classes.media} />
                </Box>
            </Grid>
        </React.Fragment>
        // </Grid>
    );
}