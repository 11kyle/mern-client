import React from 'react';
import { 
    Tabs,
    Tab
} from '@material-ui/core';
import { 
    Link,
    useLocation 
} from 'react-router-dom';

export default function CenteredTabs() {

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