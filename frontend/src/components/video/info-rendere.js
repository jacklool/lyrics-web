import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "left",
    }
}));    

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}))(Badge);

const InfoRendere = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <VisibilityIcon />
                </StyledBadge>
            </IconButton>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <ThumbUpAltIcon />
                </StyledBadge>
            </IconButton>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <ThumbDownIcon />
                </StyledBadge>
            </IconButton>
        </div>
    );
};

export default InfoRendere;