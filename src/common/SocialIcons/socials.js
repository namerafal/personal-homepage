import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedIN.svg";
// import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as CvIconPl } from "./icons/cviconpl.svg";
import { ReactComponent as CvIconEn } from "./icons/cviconen.svg";

export const socials = [
    {
        name: "GitHub",
        url: "http://github.com/namerafal",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "LinkedIn",
        url: "http://linkedin.com/in/rafał-olewicz-80053b257",
        Icon: styleIcon(LinkedInIcon),
    },
    // {
    //     name: "Instagram",
    //     url: "http://instagram.com",
    //     Icon: styleIcon(InstagramIcon),        
    // },
    {
        name: "Facebook",
        url: "https://www.facebook.com/zrobmystrone",
        Icon: styleIcon(FacebookIcon),
    },

    {
        name: "CV-PL",
        url: "https://drive.google.com/file/d/1i5S7XD5xwsFOWd5vanfmu1YcqgWhPego/view?usp=sharing",
        Icon: styleIcon(CvIconPl),
    },

    {
        name: "CV-EN",
        url: "https://drive.google.com/file/d/1XaOj_KrQtELJ8HiV31T_t0Kp1sdCMJRj/view?usp=sharing",
        Icon: styleIcon(CvIconEn),
    },
];