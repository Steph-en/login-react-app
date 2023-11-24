import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ResetPage() {
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
                m: "10em 3em 0 3em"
              }}
            >
              <Typography variant="h1" sx={{ m: ".5em 0 0 0", p: ".5em 0 15px 0" }}>
                Reset Password
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
                    Let Us Help You
                  </Typography>
                </Grid>
              </Grid>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Enter your registered email address"
                  name="email"
                  autoComplete="email"
                  // autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color='primary'
                  sx={{ mt: 3, mb: 2, }}
                >
                  Reset My Passwword
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color='secondary'
                  sx={{ mt: 3, mb: 2, }}
                >
                  Login
                </Button>
                
                <Grid></Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}