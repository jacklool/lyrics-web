import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    padding: theme.spacing(2),

  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const SongCard = (props) => {
  const [dataState, setDataState] = useState({
    songId: "",
    name: "",
    artist: "",
    video: "",
  });

  const classes = useStyles();
  const theme = useTheme();
  
  return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              { dataState.name }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              { dataState.artist }
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Button variant="contained" color="secondary">
              Lyric
            </Button>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="/"
          title="Live from space album cover"
        />
      </Card>
  );
}

export default SongCard;