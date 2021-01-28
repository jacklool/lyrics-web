import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListLyrics from './list-lyrics-component';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const InsetDividers = () => {

    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListLyrics />

            <ListLyrics />

            <ListLyrics />

            <ListLyrics />

            <ListLyrics />

        </List>
    );
};

export default InsetDividers;
