import React from 'react';
import { 
    Grid,
    Box,
    makeStyles,
} from '@material-ui/core';
import PortfolioImage_1 from '../../Images/11kyle.github.io_ghibli-react-app_.png';
import PortfolioImage_2 from '../../Images/11kyle.github.io_gif-search_.png';
import PortfolioImage_3 from '../../Images/11kyle.github.io_react-todo-table_.png';

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
        <React.Fragment>
            <Grid item sm={5}>
                <Box mt={4} px={2}>
                    <a href="https://11kyle.github.io/ghibli-react-app/">
                        <img src={PortfolioImage_1} alt="A website Kyle built." className={classes.media} />  
                    </a>
                </Box>
            </Grid>
            <Grid item sm={5}>
                <Box mt={4} px={2}>
                    <a href="https://11kyle.github.io/gif-search/">
                        <img src={PortfolioImage_2} alt="A website Kyle built." className={classes.media} />
                    </a>
                </Box>
            </Grid>
            <Grid item sm={5}>
                <Box mt={4} px={2}>
                    <a href="https://11kyle.github.io/react-todo-table/">
                        <img src={PortfolioImage_3} alt="A website Kyle built." className={classes.media} />  
                    </a>
                </Box>
            </Grid>
        </React.Fragment>
        // </Grid>
    );
}