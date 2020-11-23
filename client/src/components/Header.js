import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Toolbar, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small">Google Trends</Button>
                <Typography component="h3" variant="h6" className={classes.toolbarTitle}>TRENDING VIS</Typography>
                <IconButton><GitHubIcon /></IconButton>
            </Toolbar>
        </React.Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  }));
export default Header
