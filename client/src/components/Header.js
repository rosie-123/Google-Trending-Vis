import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Toolbar, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <a href="https://trends.google.com/trends/?geo=US" target="_blank">
          <Button size="small">Google Trends</Button>
        </a>
        <Typography
          component="h3"
          variant="h5"
          className={classes.toolbarTitle}
        >
          TRENDING VIS
        </Typography>
        <a href="https://github.com/rosie-123/Trending-vis" target="_blank">
        <IconButton>
          <GitHubIcon />
        </IconButton>
        </a>
      </Toolbar>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));
export default Header;
