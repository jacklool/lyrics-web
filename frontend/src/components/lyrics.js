import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import ReactPlayer from './video/responsive-player';
import Divider from '@material-ui/core/Divider';
import InfoRendere from './video/info-rendere';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        padding: theme.spacing(1),
        variant: 'outlined',
        textAlign: 'center',
        backgroundColor: 'text.primary',
    },
    typography: {
        variant:"body1",
    },
    title: {
        textAlign: 'left',
        marginBottom: -3,
    },
    video: {
        margin: theme.spacing(2),
    },

}));

const Lyrics = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} variant="outlined">
                <Typography className={classes.title} variant="h6" gutterBottom>
                    Pink Sweat$ - At My Worst
                </Typography>

                <InfoRendere />

                <Divider />
                <div className={classes.video}>
                    <ReactPlayer />
                </div>

                <Typography variant="body2" gutterBottom>Can I call you baby? Can you be my friend?</Typography>
                <Typography variant="body2" gutterBottom>Can you be my lover up until the very end?</Typography>
                <Typography variant="body2" gutterBottom>Let me show you love, oh, no pretend</Typography>
                <Typography variant="body2" gutterBottom>Stick by my side even when the world is caving in, yeah</Typography>
                <Typography variant="body2" gutterBottom>Oh, oh, oh, don't, don't you worry</Typography>
                <Typography variant="body2" gutterBottom>I'll be there whenever you want me</Typography>
                <Typography variant="body2" gutterBottom>I need somebody who can love me at my worst</Typography>
                <Typography variant="body2" gutterBottom>Know I'm not perfect, but I hope you see my worth</Typography>
                <Typography variant="body2" gutterBottom>'Cause it's only you, nobody new, I put you first</Typography>
                <Typography variant="body2" gutterBottom>And for you, girl, I swear I'd do the worst</Typography>
                <Typography variant="body2" gutterBottom>Ooh, ooh-ooh</Typography>
                <Typography variant="body2" gutterBottom>Ooh-ooh-ooh, ooh-ooh-ooh-ooh</Typography>
                <Typography variant="body2" gutterBottom>If you stay forever, let me hold your hand</Typography>
                <Typography variant="body2" gutterBottom>I can fill those places in your heart no one else can</Typography>
                <Typography variant="body2" gutterBottom>Let me show you love, oh, no pretend, yeah</Typography>
                <Typography variant="body2" gutterBottom>I'll be right here, baby, you know it's sink or swim</Typography>
                <Typography variant="body2" gutterBottom>Oh, oh, oh, don't, don't you worry</Typography>
                <Typography variant="body2" gutterBottom>I'll be there whenever you want me</Typography>
                <Typography variant="body2" gutterBottom>Know I'm not perfect, but I hope you see my worth, yeah</Typography>
                <Typography variant="body2" gutterBottom>'Cause it's only you, nobody new, I put you first (You first)</Typography>
                <Typography variant="body2" gutterBottom>And for you, girl, I swear I'd do the worst</Typography>
                <Typography variant="body1" gutterBottom>Ooh, ooh-ooh</Typography>
                <Typography variant="body2" gutterBottom>Ooh-ooh-ooh, ooh-ooh-ooh-ooh</Typography>
                <Typography variant="body2" gutterBottom>Ooh-ooh-ooh, ooh, ooh-ooh</Typography>
                <Typography variant="body2" gutterBottom>Ooh-ooh-ooh, ooh-ooh-ooh-ooh</Typography>
                <Typography variant="body2" gutterBottom>I need somebody who can love me at my worst</Typography>
                <Typography variant="body2" gutterBottom>Know I'm not perfect, but I hope you see my worth</Typography>
                <Typography variant="body2" gutterBottom>'Cause it's only you, nobody new, I put you first</Typography>
                <Typography variant="body2" gutterBottom>And for you, girl, I swear I'd do the worst</Typography>
            </Paper>
        </div>
    );
};

export default Lyrics;