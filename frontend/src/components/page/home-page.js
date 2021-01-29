import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SongCard from '../card/song-card-component';

const data = [
    {songId:"1", name:"At my worst", artist:"Pink Sweat$"},
    {songId:"2", name:"2002", artist:"Anne-Marie"},
    {songId:"3", name:"Death bed", artist:"Powfu"},
    {songId:"4", name:"Mood", artist:"24kGoldn"},
];

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

    const listSong = data.map((item) => {
        return (
            <SongCard key={item.songId} name={item.name} artist={item.artist}/>
        );
    });

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3} >
                    <Paper className={classes.paper} variant="outlined">
                        { listSong }
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default Homepage;
