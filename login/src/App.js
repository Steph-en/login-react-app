import "./App.css";
import Login from "./pages/LoginPage";
import { ThemeProvider, createTheme } from "@mui/material";
import ResetPage from "./pages/ResetPage";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#013e87",
    },
    secondary: {
      main: "#2e74c9",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "600",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
  },
});

function App() {
  const [openReset, setReset] = useState(true);
  function toggleReset() {
    setReset(!openReset);
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {openReset ? (
          <Login doSmth={toggleReset} />
        ) : (
          <ResetPage doSmth={toggleReset} />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;