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

    // Sort blogposts by date posted
    blogposts.sort((a, b) => {
        const fristPost = new Date(a.posted);
        const secondPost = new Date(b.posted);

        return secondPost - fristPost;
    });

    // Map blogposts the the DOM
    const listItems = blogposts.map((blogpost) => 
        <Grid item xs={12} key={blogpost._id}>
            <Box mt={4}>
            <Paper elevation={2}>
                <Box p={2}>
                    <Typography variant="h4">
                        {blogpost.title}
                    </Typography>
                    <Typography variant="subtitle2" color="primary">
                        {moment(blogpost.posted).format('dddd MMM D, YYYY')}
                    </Typography>
                    <Typography gutterBottom>
                        Author: {blogpost.author}
                    </Typography>
                    <Typography>
                        {blogpost.body}
                    </Typography>
                </Box>
            </Paper>
            </Box>
        </Grid>
    );

    return(
        <React.Fragment>
            {listItems} 
        </React.Fragment>
    );
}