import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import imgBirthday from '../images/anne-marie/birthday.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2),
    },
  }));

const ListLyrics = () => {
    const classes = useStyles();

    return (
        <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar variant="square" className={classes.large}>
                        <img src={imgBirthday} width="100%"/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Song name" secondary="jan 9, 2014"/>
            </ListItem>
            <Divider component="li" />
            
        </div>
        
    );
};

export default ListLyrics;