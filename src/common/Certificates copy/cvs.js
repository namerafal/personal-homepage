// import { styleCertificate } from "./styled";
import CVRafalOlewiczPL from "./documents/CVRafalOlewiczPL.pdf";
import CVRafalOlewiczEN from "./documents/CVRafalOlewiczEN.pdf";

export const cvs = [
    {
        name: "CV PL",
        language: "PL",
        date: "2025",
        institution: "RO",
        file: <iframe src={CVRafalOlewiczPL} alt="CV - Rafał Olewicz" />,
    },

    {
        name: "CV EN",
        language: "EN",
        date: "2025",
        institution: "RO",
        file: <iframe src={CVRafalOlewiczEN} alt="CV - Rafal Olewicz" />,
    }
];