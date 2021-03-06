import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SongCard from '../card/song-card-component';


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
                        <Paper className={classes.paper} variant="outlined">
                            <SongCard />

                            <SongCard />

                            <SongCard />

                            <SongCard />

                            <SongCard />
                        </Paper>
                    </Grid>
                    <Grid item xs="12" sm="4">
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Homepage;
