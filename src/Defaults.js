import React from "react";
import About from "./components/Landing/Sections/About";
import Schedule from "./components/Landing/Sections/Schedule";
import Sponsors from "./components/Landing/Sections/Sponsors/Sponsors.jsx";
import Partners from "./components/Landing/Sections/Sponsors/Partners.jsx";
import Stats from "./components/Landing/Sections/Stats.jsx";
import FAQs from "./components/Landing/Sections/Faqs";
import Footer from "./components/Landing/Sections/Footer";

const defaults =  {
    "title": "HackRU Spring 2020",
    "dateText": "April 18th-19th",
    "locationText": "College Avenue Student Center",
    "universityText": "Rutgers University",
    "slogan": "hack all knight",
    "mobileWidthThresholdSensitive": 1500,
    "mobileWidthThresholdRelaxed": 1200,
    "mobileHeightThresholdRelaxed": 650,
    "enableFlyingLogo": false,
    "poc": true,
    "rest": {
        "dev": "https://api.hackru.org/dev",
        "prod": "https://api.hackru.org/prod",
        "resumes": "https://hackru-resumes.s3.amazonaws.com",
        "s3": "http://hackru-misc.s3-website-us-west-2.amazonaws.com/"
    },
    "sponsorshipLogos": "https://s3-us-west-2.amazonaws.com/hackru-internal/sponsorship-logos/",
    "partnerLogos": "https://s3-us-west-2.amazonaws.com/hackru-internal/partners-logos/",
    "teamInfo": "https://s3-us-west-2.amazonaws.com/hackru-internal/hackru-team/",
    "freeze": false,
    "volunteers": {
        "display": true,
        "vol_url": "https://docs.google.com/forms/d/e/1FAIpQLSe_qBzqsJIKWd_BohZ7Xuju3XQhI2f6xtrwX7WO-otR0Q7ofg/viewform?usp=sf_link",
        "mentor_url": "https://docs.google.com/forms/d/1hR-R6bpZoLAlPZFyoNYUquc7x8JX4ydWvZoCXckCmCU"
    },
    "dayof": false
};

const navlinks = {
    "ABOUT": {
        "url": "#about",
        "enabled": !defaults.freeze,
        "hideLink": false,
        "fullHeight": false,
        "component": (props) => <About {...props} />
    },
    "SCHEDULE": {
        "url": "#schedule",
        "enabled": !defaults.freeze,
        "hideLink": false,
        "fullHeight": false,
        "component": (props) => <Schedule {...props} />
    },
    "SPONSORS": {
        "url": "#sponsors",
        "enabled": !defaults.freeze,
        "hideLink": false,
        "fullHeight": false,
        "component": (props) => <Sponsors {...props} />
    },
    "PARTNERS": {
        "url": "#partners",
        "enabled": !defaults.freeze,
        "hideLink": false,
        "fullHeight": false,
        "component": (props) => <Partners {...props} />
    },
    "NUMBERS": {
        "url": "#numbers",
        "enabled": !defaults.freeze,
        "hideLink": true,
        "fullHeight": false,
        "component": (props) => <Stats {...props} />
    },
    "FAQS": {
        "url": "#faqs",
        "enabled": !defaults.freeze,
        "hideLink": false,
        "fullHeight": false,
        "component": (props) => <FAQs {...props} />
    },
    "Footer": {
        "url": "#footer",
        "enabled": true,
        "hideLink": true,
        "fullHeight": false,
        "skew": false,
        "component": (props) => <Footer {...props} />
    }
};
// To unify styling between javascript and css, we define these variables in "index.css" as a variable, and proceed to get a handle
// to the respective values through JavaScript
let computedStyle = getComputedStyle(document.body);
const theme = {
    "primary": [
        computedStyle.getPropertyValue("--primary-color"),
        computedStyle.getPropertyValue("--primary-color-alt")],
    "secondary": [
        computedStyle.getPropertyValue("--secondary-color"),
        computedStyle.getPropertyValue("--secondary-color-alt")],
    "accent": [
        computedStyle.getPropertyValue("--accent-color"),
        computedStyle.getPropertyValue("--accent-color-alt")],
    "disabled": [
        computedStyle.getPropertyValue("--disabled-color")
    ]
};
// Populate the theme variable with css variables
let varList = [
    // Form Inputs
    "input-background",
    "input-placeholder",
    "input-border",
    "input-color",
    "input-border-radius",
    "select-background",
    "select-color",
    "select-input-background",
    // Hero Image
    "hero-width",
    "hero-height",
    "hero-border-radius",
    "hero-background",
    // Sponsors
    "sponsors-title-color",
    "sponsors-platinum-color",
    "sponsors-gold-color",
    "sponsors-silver-color",
    "sponsors-bronze-color"
];
varList.forEach((element) => {
    theme[element] = computedStyle.getPropertyValue("--" + element);
    return element;
});
// Live "important links"
const liveImportantLinks = [
    {
        "title": "Waiver",
        "href": "https://hackru.org/resources/waiver.pdf",
        "icon": "file"
    },
    {
        "title": "Devpost",
        "href": "http://hackru-f19.devpost.com",
        "icon": "code"
    },
    {
        "title": "Slack",
        "href": "http://tinyurl.com/hackru-f19",
        "icon": "slack"
    },
    {
        "title": "HelpQ",
        "href": "https://helpq.hackru.org",
        "icon": "stack-overflow"
    },
    {
        "title": "Food Menu",
        "href": "https://s3-us-west-2.amazonaws.com/hackru-misc/menu.pdf",
        "icon": "cutlery"
    }
];

export {
    defaults,
    navlinks,
    theme,
    liveImportantLinks
};
