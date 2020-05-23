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
import websiteForPortfolio01 from '../../Images/website_for_portfolio_01.png';
import websiteForPortfolio02 from '../../Images/website_for_portfolio_02.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        marginTop: 16,
    },
    media: {
        height: 140,
    },
})

export default function Portfolio() {

    const classes = useStyles();

    return(
        
        <Grid
            container
            direction="column"
            alignItems="center"
            spacing={0}
        >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="One of the websites I created."
                        image={websiteForPortfolio01}
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
                        image={websiteForPortfolio02}
                        title="One of the websites I created."
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Ghibli
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