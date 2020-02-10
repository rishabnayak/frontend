/**
 * @author Spring 2020 HackRU Team
 * @description Main application navigation bar
 * @version 2.0.1
 */
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = ({ user }) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    HackRU
                </Typography>
                <Button> <MenuIcon /> About Us</Button>
                <Button>About Us</Button>
                <Button>About Us</Button>
          <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;