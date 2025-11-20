import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedIN.svg";
// import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as CvIcon } from "./icons/cvicon.svg";

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
        name: "CV",
        url: "https://drive.google.com/file/d/1UWsHPEe9ztSQ372zONO7hhPELiB1rlQI/view?usp=sharing",
        Icon: styleIcon(CvIcon),
    },
];