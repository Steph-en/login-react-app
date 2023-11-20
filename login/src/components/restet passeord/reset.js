import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { Container } from '@mui/material';
// import { Container } from '@mui/material/styles';

export default function resetPassword() {
  return (
    <div>
      <Paper elevation={20} sx={{ my: 13, borderRadius: ".5em .5em .5em .5em", }}>
        <Grid container component="main" sx={{ height: '80vh', width: "80em", }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'https://unsplash.com/photos/shallow-focus-photo-of-toddler-walking-near-river-JZ51o_-UOY8',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: ".5em 0 0 .5em"
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ borderRadius: "0 .5em .5em 0", }}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'self-start',
                m: "2.5em 0 0 4em"
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
                <LockOutlinedIcon />
              </Avatar> */}
              <Typography variant="h1" sx={{ m: ".5em 0 0 0", p: ".5em 0 15px 0" }}>
                Welcome to Preskool
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "end"
                }}
              >
                <Grid>
                  <Typography sx={{ color: "gray" }}>
                    Need an account?
                  </Typography>
                </Grid>
                <Grid sx={{ p: "1px 0 0 10px" }}>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ textDecoration: "none", color: "#0A9CD5" }}
                  >
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Grid>
                <Typography variant='h2' sx={{ p: "1em 0 .2em 0" }}>
                  Sign in
                </Typography>
              </Grid>
              <Box component="form" noValidate sx={{ mt: 1 }}>
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
                <Grid sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}>
                  <Grid sx={{ color: "gray" }} >
                    <FormControlLabel
                      control={<Checkbox value="remember" color="secondary" />}
                      label="Remember me"
                    />
                  </Grid>
                  <Grid sx={{ p: "10px 0 0 0" }}>
                    <Link href="#" variant="body2" sx={{ textDecoration: "none", color: "#0A9CD5" }} >
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color='secondary'
                  sx={{ mt: 3, mb: 2, }}
                >
                  Sign In
                </Button>
                <Grid>
                  <Divider>
                    OR
                  </Divider>
                </Grid>
                <Grid></Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}