import React from "react";
import {StyledEngineProvider, CssBaseline} from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material";
import {grey} from "@mui/material/colors";

import Top from "./components/Top/Top.jsx";
import Map from "./components/Map/Map";

const theme = createTheme({
    palette:{
        primary:{
            main: grey[50]
        }
    },
    typography: {
        fontFamily: [
            'Rubik',
            'sans-serif',
        ].join(','),
    },});


const App = (props) => {
  return(
      <>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Top/>
                <Map/>
            </ThemeProvider>
        </StyledEngineProvider>
      </>
  )
}

export default App;