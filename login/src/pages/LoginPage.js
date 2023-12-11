import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';// import { Link } from 'react-router-dom';
import image from '../assets/img/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default function SignIn({ doSmth }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Paper elevation={6} sx={{ my: 13, borderRadius: ".5em .5em .5em .5em", }}>
        <Grid container component="main" sx={{ height: '80vh', width: "80em", borderRadius: ".5em .5em .5em .5em" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: ".5em 2em 2em .5em"
            }}
          />
          <Grid item xs={12} sm={8} md={5} square sx={{ borderRadius: "0 .5em .5em 0", }}>
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
                {/* <Grid>
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
                </Grid> */}
              </Grid>
              <Grid>
                <Typography variant='h2' sx={{ p: "1em 0 .2em 0", color: "GrayText" }}>
                  Sign in
                </Typography>
              </Grid>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="email"
                  autoComplete="email"
                  autoFocus
                /> */}
                <FormControl sx={{ mt: 1, }}
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Password"
                  name="username"
                  autoComplete="email"
                  variant="outlined"
                  autoFocus
                >
                  <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-username"
                    endAdornment={<InputAdornment position="end"><AccountCircleRoundedIcon /></InputAdornment>}
                    label="Username"
                  />
                </FormControl>
                <FormControl sx={{ mt: 1, }}
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
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
                  <Grid sx={{ p: "10px 0 0 0" }} >
                    <Button variant="body2" sx={{ textDecoration: "none", color: "#0A9CD5" }} onClick={() => { doSmth() }}>
                      Forgot password?
                    </Button>
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
                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-evenly' }}>
                  <Button
                    type="button"
                    variant="contained"
                    color='other'
                    sx={{ mt: 2, mb: 2 }}
                  >
                    <GoogleIcon />
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    color='other'
                    sx={{ mt: 2, mb: 2 }}
                  >
                    <FacebookIcon />
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    color='other'
                    sx={{ mt: 2, mb: 2 }}
                  >
                    <TwitterIcon />
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    color='other'
                    sx={{ mt: 2, mb: 2 }}
                  >
                    <LinkedInIcon />
                  </Button>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}