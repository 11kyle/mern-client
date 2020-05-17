import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

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
                    label="About"
                    component={Link}
                    to="/"
                />
                <Tab 
                    label="Portfolio"
                    component={Link}
                    to="/portfolio"
                />
                <Tab 
                    label="Blog"
                    component={Link}
                    to="/blog"
                />
            </Tabs>
    );
}