import {createTheme} from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: [
            'Rubik',
            'sans-serif',
        ].join(','),
    },

    breakpoints: {
        values: {
            xs: 375,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1440
        },
    },

});

export default theme