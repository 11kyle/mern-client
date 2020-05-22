import React from 'react';
import { 
    Grid,
    Paper,
    Typography,
    Box 
} from '@material-ui/core'; 

export default function Blog(props) {

    const { blogposts } = props;
    const listItems = blogposts.map((blogpost) => 
        <Grid item xs={12} key={blogpost._id}>
            <Paper elevation={2} style={{maxWidth: "600px" }}>
                <Box p={2} mt={2}>
                    <Typography variant="h6">
                        {blogpost.title}
                    </Typography>
                    <Typography variant="subtitle2">
                        Thursday, Sep 21, 2017 8:37 PM
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
            alignContent="center"
            spacing={0}
        >
            <Grid item xs={12}>
                {listItems}
            </Grid>
        </Grid>
    );
}