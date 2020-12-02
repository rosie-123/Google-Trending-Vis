import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Tabs, Tab, Box, Card, CardContent, CardHeader } from "@material-ui/core";
import { TabContext } from '@material-ui/lab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={4}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function DecadeTop() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    //   const [data, setData] = useState({});
    //   useEffect(() => {
    //     fetch("https://www.cbsnews.com/news/google-top-search-terms-of-the-past-decade-2019-year-in-search-trending-new-year/")
    //       .then((response) => response.json())
    //       .then((response) => {
    //         fetch(response.url)
    //           .then(response2 => response2.text())
    //           .then(response2 => {
    //             setData(response2)
    //       });
    //     });
    //   }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="2010" {...a11yProps(0)} />
                <Tab label="2012" {...a11yProps(1)} />
                <Tab label="2013" {...a11yProps(2)} />
                <Tab label="2014" {...a11yProps(3)} />
                <Tab label="2015" {...a11yProps(4)} />
                <Tab label="2016" {...a11yProps(5)} />
                <Tab label="2017" {...a11yProps(6)} />
                <Tab label="2018" {...a11yProps(7)} />
                <Tab label="2019" {...a11yProps(8)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Typography variant="h1" component="h2">
                    iPad
                </Typography>
                <TabContext>
                    The iPad, which was released by Apple in 2010, was Google's fasted rising search query that year.
                    Also new on the scene was Justin Bieber, who released his first studio album in 2010 and was the highest-trending person on Google's list.
                    People were falling in love with Apple and catching Bieber Fever in 2010.
                    iPad and Justin Bieber were Google's fastest-rising search terms that year.

                 </TabContext>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
            <TabPanel value={value} index={7}>
                Item Seven
            </TabPanel>
            <TabPanel value={value} index={8}>
                Item Seven
            </TabPanel>

        </div>
    );
}

