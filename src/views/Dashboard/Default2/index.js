import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Divider, Typography, makeStyles, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:'#b8e4eb',
        minHeight: '100%',
    },
    backButton: {
        marginLeft: theme.spacing(2),
    },
    card: {
        overflow: 'visible',
        display: 'flex',
        position: 'relative',
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%',
            width: '50%',
        },
        maxWidth: '475px',
        margin: '24px auto',
    },
    content: {
        padding: theme.spacing(5, 4, 3, 4),
    },
    forgot: {
        textDecoration: 'none',
        paddingLeft: '16px',
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
}));

const Login = () => {
    const classes = useStyles();

    const history = useHistory();

    const login = () => {
        history.push('/user');
    };


    return (
        <>
            <form className='login-form'>
                <Grid container justify="center" alignItems="center" className={classes.root}>
                    <Grid item xs={11} sm={9} md={10} lg={4}>
                        <Card className={classes.card}>
                            <CardContent className={classes.content}>
                                <Grid container direction="column" spacing={4} justify="center">
                                    <Grid item xs={12}>
                                        <Grid container justify="space-between">
                                            <Grid item>
                                                <Typography color="textPrimary" gutterBottom variant="h2">
Profile Details
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                   fill admin details*
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            autoFocus
                                            label="FirstName"
                                            margin="normal"
                                            name="firstName"
                                            type="text"
                                            defaultValue=""
                                            variant="outlined"
                                            required
                                        />
                                        <TextField
                                            fullWidth
                                            label="LastName"
                                            margin="normal"
                                            name="lastName"
                                            type="text"
                                            defaultValue=""
                                            variant="outlined"
                                            required
                                        />
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            margin="normal"
                                            name="email"
                                            type="email"
                                            defaultValue=""
                                            variant="outlined"
                                            required
                                        />
                                        <TextField
                                            fullWidth
                                            label="Contact No."
                                            margin="normal"
                                            name="contactNo"
                                            type="number"
                                            defaultValue=""
                                            variant="outlined"
                                            required
                                        />
    
                                    </Grid>
                                    <Divider />
                                    <Grid container justify="flex-start" className={classes.margin}>
                                        <Grid item>
                                            <Typography style={{fontSize:'14px'}}
                                                variant="subtitle2"
                                                color="secondary"
                                                component={Link}
                                                to="/register"
                                                className={classes.forgot}
                                            >
                                               Are you Sure ?
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <button
                                                onClick={login}
                                                style={{
                                                    background: '#2cc7de',
                                                    borderRadius: '5px',
                                                    border: ' none',
                                                    color: '#00000',
                                                    padding: '10px 20px',
                                                    margin: '10px 17px',
                                                }}
                                                className="loginbutton"
                                            >
                                                Update Profile
                                            </button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default Login;
