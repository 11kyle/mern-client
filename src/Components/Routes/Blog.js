import React from 'react';
import { 
    Grid,
    Paper,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core'; 
import moment from 'moment';
import Code from '../SubComponents/Code';
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
                            <Typography paragraph={true}>
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
                                language="bash"
                                children={codeSnippets.b} 
                            />

                            <Typography gutterBottom>
                                Once gh-pages is successfully installed in the project, we need to update the package.json file. Add a name-value pair of homepage with the url of your github repository. Also, add predeploy and deploy scripts to the scripts property:
                            </Typography>
                            <Typography variant="caption">
                                package.json
                            </Typography>
                            <Code 
                                language="json"
                                children={codeSnippets.a} 
                            />

                            <Typography gutterBottom>
                                Finally, return to the command line or terminal and run the deploy script:
                            </Typography>
                            <Typography variant="caption">
                                terminal/cmd
                            </Typography>
                            <Code 
                                language="bash" 
                                children={codeSnippets.c} 
                            />

                        </Box>
                    </Paper>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box mt={4}>
                    <Paper elevation={2}>
                        <Box p={2}>
                            <Typography variant="h4">
                                GitHub Cheatsheet
                            </Typography>
                            <Typography variant="subtitle2" color="primary">
                                Thurs Jun 25, 2020
                            </Typography>
                            <Typography paragraph={true}>
                                Author: Kyle Johnson
                            </Typography>
                            <Typography>
                                
                            </Typography>
                            <Code 
                                language="bash"
                                children={codeSnippets.d}
                            />
                        </Box>
                    </Paper>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box mt={4}>
                    <Paper elevation={2}>
                        <Box p={2}>
                            <Typography variant="h4">
                                My favorite Google Fonts
                            </Typography>
                            <Typography variant="subtitle2" color="primary">
                                Thurs Jun 25, 2020
                            </Typography>
                            <Typography paragraph={true}>
                                Author: Kyle Johnson
                            </Typography>
                            <Typography paragraph={true}>
                                It is important to have the right typography for many reasons. Here are some reasons along with some of my favoite Google Fonts.
                            </Typography>
                            <Typography>
                                1. Readability
                            </Typography>
                            <Typography paragraph={true}>
                                They may seem obvious but so many developers choose a font on design over readability. Google Fonts has many fonts the look beautiful in their Handwriting category but these are often hard to read. Chose a font that is clean.
                            </Typography>
                            <Typography>
                                2. Target Audience
                            </Typography>
                            <Typography paragraph={true}>
                                Knowing and understanding the target audience of the website will help determine the font choice. A business website like The New York Times has an older, professional target audience which makes for a more profession looking font. 
                                Virgin Airlines is targeting the younger audlt and use a font that is softer and has more spacing between characters and words.
                            </Typography>
                            <Typography>
                                Here are two of my favorite fonts from Google Fonts.
                            </Typography>
                            <List>
                                <ListItem component="a" href="https://fonts.google.com/specimen/Quicksand?query=quicksand">
                                    <ListItemText primary="Quicksand" />
                                </ListItem>
                                <ListItem component="a" href="https://fonts.google.com/specimen/Baloo+2?query=baloo">
                                    <ListItemText primary="Baloo 2" />
                                </ListItem>
                            </List>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
            {/* {listItems}  */}
        </React.Fragment>
    );
}