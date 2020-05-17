import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, useLocation } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//         flexGrow: 1,
//     },
// });

export default function CenteredTabs() {
    // const classes = useStyles();
    let location = useLocation();
    const [value, setValue] = React.useState(location.pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
            <Tabs 
                value={value}
                onChange={handleChange} 
                aria-label="navigation tabs"
                centered
            >
                <Tab
                    value="/"
                    label="About"
                    component={Link}
                    to="/"
                />
                <Tab
                    value="/portfolio"
                    label="Portfolio"
                    component={Link}
                    to="/portfolio"
                />
                <Tab
                    value="/blog"
                    label="Blog"
                    component={Link}
                    to="/blog"
                />
            </Tabs>
    );
}