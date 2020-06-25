import React from 'react';
import { 
    Grid,
    Box,
    makeStyles,
    Typography,
    Chip
} from '@material-ui/core';
import PortfolioImage_1 from '../../Images/11kyle.github.io_ghibli-react-app_.png';
import PortfolioImage_2 from '../../Images/11kyle.github.io_gif-search_.png';
import PortfolioImage_3 from '../../Images/11kyle.github.io_react-todo-table_.png';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "16px",
    },
    media: {
        maxWidth: "100%",
        height: "auto",
    },
    itemOrder1: {
        [theme.breakpoints.down('xs')]: {
            order: "1"
        }
    },
    itemOrder2: {
        [theme.breakpoints.down('xs')]: {
            order: "2"
        }
    },
    itemOrder3: {
        [theme.breakpoints.down('xs')]: {
            order: "3"
        }
    },
    itemOrder4: {
        [theme.breakpoints.down('xs')]: {
            order: "4"
        }
    },
    itemOrder5: {
        [theme.breakpoints.down('xs')]: {
            order: "5"
        }
    },
    itemOrder6: {
        [theme.breakpoints.down('xs')]: {
            order: "6"
        }
    },
}));

export default function Portfolio() {

    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid item sm={6} className={classes.itemOrder1}>
                <Box mt={4} px={2}>
                    <a href="https://11kyle.github.io/ghibli-react-app/">
                        <img src={PortfolioImage_1} alt="A website Kyle built." className={classes.media} />  
                    </a>
                </Box>
            </Grid>
            <Grid item sm={6} className={classes.itemOrder2}>
                <Box mt={4} px={2}>
                    <Typography>
                        This project was bootstrapped with Create React App. This project was originally written in vanilla javascript. I replaced the vanilla javascript with React and axios. The css is custom.
                    </Typography>
                    <Chip label="React" variant="outlined" />
                    <Chip label="jsx" variant="outlined" />
                    <Chip label="axios" variant="outlined" />
                </Box>
            </Grid>

            <Grid item sm={6} className={classes.itemOrder4}>
                <Box mt={4} px={2}>
                    <Typography>
                        This project uses axios to make a get request to the Giphy API. The request contains a query with the default value of 'cats'.
                    </Typography>
                    <Chip label="React" variant="outlined" />
                    <Chip label="jsx" variant="outlined" />
                    <Chip label="axios" variant="outlined" />
                </Box>
            </Grid>
            <Grid item sm={6} className={classes.itemOrder3}>
                <Box mt={4} px={2}>
                    <a href="https://11kyle.github.io/gif-search/">
                        <img src={PortfolioImage_2} alt="A website Kyle built." className={classes.media} />
                    </a>
                </Box>
            </Grid>

            <Grid item sm={6} className={classes.itemOrder5}>
                <Box mt={4} px={2}>
                    <a href="https://11kyle.github.io/react-todo-table/">
                        <img src={PortfolioImage_3} alt="A website Kyle built." className={classes.media} />  
                    </a>
                </Box>
            </Grid>
            <Grid item sm={6} className={classes.itemOrder6}>
                <Box mt={4} px={2}>
                    <Typography>
                        A simple CRUD application written with React.
                    </Typography>
                    <Chip label="React" variant="outlined" />
                    <Chip label="jsx" variant="outlined" />
                </Box>
            </Grid>


        </React.Fragment>
        // </Grid>
    );
}