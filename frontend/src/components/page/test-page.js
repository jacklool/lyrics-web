import React, { Fragment } from 'react';
import {
    makeStyles,
    createMuiTheme,
    MuiThemeProvider,
    withStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import 'typeface-exo';
import 'typeface-ubuntu';

const styles = theme => ({
    button: { margin: theme.spacing(2) }
});

const roboto = createMuiTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    }
});

const exo = createMuiTheme({
    typography: {
        fontFamily: '"Exo", "Roboto", "Helvetica", "Arial", sans-serif'
    }
});

const ubuntu = createMuiTheme({
    typography: {
        fontFamily: '"Ubuntu", "Roboto", "Helvetica", "Arial", sans-serif'
    }
});

const theme = createMuiTheme({
    overrides: {
        MuiDialogTitle: { root: { textAlign: 'center' } },
        MuiDialogActions: { root: { justifyContent: 'center' } }
    }
});
    

const TestPage = withStyles(styles)(({themeType, classes}) => {

    const light = createMuiTheme({
        palette: {
            type: 'light',
            primary: blue,
            secondary: pink,
            error: { main: red[600] }
        },
        typography: {
            fontFamily: '"Exo", "Roboto", "Helvetica", "Arial", sans-serif'
        },
    });

    const dark = createMuiTheme({
        palette: {
            type: 'dark',
            primary: blue,
            secondary: pink,
            error: { main: red[600] }
        },
        typography: {
            fontFamily: '"Ubuntu", "Roboto", "Helvetica", "Arial", sans-serif'
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            <Dialog open={true}>
                <DialogTitle>Use Google's location service?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary">Disagree</Button>
                    <Button variant="contained" color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </MuiThemeProvider>
    );
}
);

export default TestPage;