// import { styleCertificate } from "./styled";
import FrontendDeveloper from "./documents/Certificat.jpg";

export const certificates = [
    {
        name: "Frontend Developer",
        language: "PL",
        date: "2025",
        institution: "YouCode",
        file: <img src={FrontendDeveloper} alt="Frontend Developer Certificate" />,
    },

    {
        name: "Anader Certificate",
        language: "EN",
        date: "2024",
        institution: "Anader Institution",
        file: <img src={FrontendDeveloper} alt="Anader Certificate" />,
    }
];