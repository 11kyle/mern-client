import React from 'react';
import { 
    Grid,
    Typography,
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    CardMedia
} from '@material-ui/core';
import PortfolioDesktop01 from '../../Images/portfolio-desktop-01.png';
import PortfolioDesktop02 from '../../Images/portfolio-desktop-02.png';

const useStyles = makeStyles({
    root: {
        marginTop: "16px",
    },
    media: {
        height: 140,
    },
});

export default function Portfolio() {

    const classes = useStyles();

    return(
        <Grid item xs={12}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="One of the websites I created."
                        image={PortfolioDesktop01}
                        title="One of the websites I created."
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Ghibli
                        </Typography>
                        <Typography variant="body2" component="p">
                            Built with React, Axios and custom CSS.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="One of the websites I created."
                        image={PortfolioDesktop02}
                        title="One of the websites I created."
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Gif Search
                        </Typography>
                        <Typography variant="body2" component="p">
                            Built with React, Axios and Bootstrap.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}