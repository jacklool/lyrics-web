import React, { Component } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Lyrics from '../lyrics';
import Reated from '../reated-component';
import BreadCrumb from '../breadcrumb';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    player: {
        width: '100%',
    }

}));

const Homepage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3} >
                    <Grid item xs="12" sm="8">
                        <BreadCrumb />
                        <Lyrics />
                    </Grid>
                    <Grid item xs="12" sm="4">
                        <Paper className={classes.paper} variant="outlined">
                            <Reated />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Homepage;
