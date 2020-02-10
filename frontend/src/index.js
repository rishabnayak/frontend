/**
 * @author Spring 2020 HackRU Team
 * @description React application start
 * @version 2.0.1
 */
import React from "react"; // Required react dependencies
import ReactDOM from "react-dom"; // Required react dependencies
import Root from "./app/Root"; // Default app and component to be rendered
import * as serviceWorker from "./serviceWorker"; // Service worker dependencies
/**
 * Application entry point. Here we render the standard root components that are standard to all pages in the website
 * 
 * @param {boolean} worker Toggle the default react service worker.
 *      We default this to false because enabling the service worker brings with it application caching, which causes production
 *      issues during version updates. If you would like to know about this issue in depth, read through the react documentation.
 */
function main(worker) {
    // Render the default root object
    ReactDOM.render(<Root />, document.getElementById("root"));
    // Decide whether or not we need to enable the default service worker
    if (worker) {
        serviceWorker.register();
    } else {
        serviceWorker.unregister();
    }
}
main(false);