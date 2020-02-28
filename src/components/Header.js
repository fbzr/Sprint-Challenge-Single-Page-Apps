import React, { Fragment } from "react";
import { useLocation } from "react-router";
import { AppBar, Toolbar, Typography, Paper, Tabs, Tab } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default function Header() {
  const pathName = useLocation().pathname;

  return (
    <Fragment>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h2'>
            Rick &amp; Morty Fan Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        <Tabs value={pathName} indicatorColor='primary' textColor='primary' centered>
          <Tab label="Home" component={Link} value="/" to='/' />
          <Tab label="Characters" component={Link} value="/characters" to='/characters' />
          <Tab label="Locations" component={Link} value="/location" to='/location' />
          <Tab label="Episodes" component={Link} value="/episodes" to='/episodes' />
        </Tabs>
      </Paper>
    </Fragment>
  );
}
