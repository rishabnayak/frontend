import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import * as font from "./fonts/font";

const Theme = (props) => {
    return (
        <ThemeProvider theme={createMuiTheme({
            typography: {
                fontFamily: font.family,
                button: {
                    textTransform: "none"
                }
            },
            palette: {
                primary: {
                    main: "rgba(255, 0, 0, 1)"
                }
            },
            overrides: {
                MuiCssBaseline: {
                    "@global": {
                        "@font-face": font.faces
                    }
                }
            }
        })}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );
}
export default Theme;