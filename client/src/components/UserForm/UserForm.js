import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Alert, AlertTitle} from "@material-ui/lab";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    alert: {
        width: '100%',
    },
}));

const UserForm = (props) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {props.title}
                </Typography>
                {props.error && <Alert
                severity="error"
                className={classes.alert}
                >
                <AlertTitle>Error</AlertTitle>
                     {props.error}
                 </Alert>}
                <form className={classes.form} onSubmit={props.onSubmit}>
                    <Grid container spacing={2}>
                        {props.children}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {props.title}
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default UserForm;