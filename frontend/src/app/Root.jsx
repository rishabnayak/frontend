/**
 * @author Spring 2020 HackRU Team
 * @description Main application root, instantiating the default theme
 * @version 2.0.1
 */
import React, { useState } from "react"; // Required react dependencies
import Theme from "../theme/theme"; // Default HackRU Theme
import User from "./User";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";

const Root = (props) => {
    let [user, setUser] = useState(new User());
    let [magic, setMagic] = useState("");
    return (
        <div className="hackru-root-container">
            <Theme>
                <Navbar user={user} magic={magic} />
                {/* <Background /> */}
                {/* <Router user={user} magic={magic} /> */}
            </Theme>
        </div>
    );
}
export default Root;