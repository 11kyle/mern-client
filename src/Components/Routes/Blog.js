import React from 'react';
import { 
    Grid,
    Paper,
    Typography,
    Box
} from '@material-ui/core'; 
import moment from 'moment';

export default function Blog(props) {

    const { blogposts } = props;

    console.log(moment(blogposts[3].posted).format('dddd MMM D, YYYY'));

    const listItems = blogposts.map((blogpost) => 
        <Grid item xs={12} key={blogpost._id}>
            <Paper elevation={2} style={{maxWidth: "600px", margin: "0 auto"}}>
                <Box p={2} mt={2}>
                    <Typography variant="h6">
                        {blogpost.title}
                    </Typography>
                    <Typography variant="subtitle2">
                        {blogpost.posted}
                    </Typography>
                    <Typography>
                        Author: {blogpost.author}
                    </Typography>
                    <Typography>
                        {blogpost.body}
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );

    return(
        <Grid
            container
            direction="column"
            alignItems="stretch"
            spacing={0}
        >
            {listItems}
        </Grid>
    );
}