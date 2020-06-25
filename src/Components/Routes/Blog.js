import React from 'react';
import { 
    Grid,
    Paper,
    Typography,
    Box
} from '@material-ui/core'; 
import moment from 'moment';
import Code from '../SubComponents/Code';
import codeSnippet from '../../CodeSnippets';
import codeSnippets from '../../CodeSnippets';

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
            <Grid item xs={12}>
                <Box mt={4}>
                <Paper elevation={2}>
                    <Box p={2}>
                        <Typography variant="h4">
                            How to deploy a create-react-app to gh-pages
                        </Typography>
                        <Typography variant="subtitle2" color="primary">
                            Wednesday Jun 24, 2020
                        </Typography>
                        <Typography gutterBottom>
                            Author: Kyle Johnson
                        </Typography>

                        <Typography gutterBottom>
                            The first step is to install gh-pages as a development dependency. Open the command line or terminal and enter the following:
                        </Typography>

                        {/* Example of a blogpost with syntax highlighting */}
                        <Typography variant="caption">
                            terminal/cmd
                        </Typography>
                        <Code 
                            children={codeSnippets.b} 
                            language="bash"
                        />

                        <Typography gutterBottom>
                             Once gh-pages is successfully installed in the project, we need to update the package.json file. Add a homepage property with the url to your github repository. Also, add predeploy and deploy scripts to the scripts property:
                        </Typography>
                        <Typography variant="caption">
                            package.json
                        </Typography>
                        <Code children={codeSnippet.a} language="json"
                        />

                        <Typography gutterBottom>
                            Finally, return to the command line or terminal and run the deploy script:
                        </Typography>
                        <Typography variant="caption">
                            terminal/cmd
                        </Typography>
                        <Code children={codeSnippets.c} language="bash" />

                    </Box>
                </Paper>
                </Box>
            </Grid>
            {listItems} 
        </React.Fragment>
    );
}