// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/sign-in/SignIn.js

import { Avatar, Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Copyright( props ) {
    return (
        <Typography variant="body2" color="GrayText.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme();

export default function Signin() {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container compoent="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <Box
                        compoent="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 1 }}
                        >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Sign In
                        </Button>
                    </Box>
                    
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    
                    <Box sx={{ mt: 4 }}>
                        <Link href="/" color="secondary">
                            Go to the Home
                        </Link>
                    </Box>
                </Box>
                
                <Copyright sx={{ mt: 4, mb: 4 }} />

            </Container>
        </ThemeProvider>
    );
}