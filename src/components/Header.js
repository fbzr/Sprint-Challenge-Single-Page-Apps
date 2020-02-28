import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography, Paper, Tabs, Tab } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default function Header() {
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
        <Tabs value={0} indicatorColor='primary' textColor='primary' centered>
          <Link to='/'>
            <Tab label='Home' />
          </Link>
          <Link to='/characters'>
            <Tab label='Characters' />
          </Link>
          <Link to='/location'>
            <Tab label='Locations' />
          </Link>
          <Link to='/episodes'>
            <Tab label='Episodes' />
          </Link>
        </Tabs>
      </Paper>
    </Fragment>
  );
}
