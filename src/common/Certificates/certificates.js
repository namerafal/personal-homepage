// import { styleCertificate } from "./styled";
import FrontendDeveloperPL from "./documents/CertificatPL.jpg";
import FrontendDeveloperEN from "./documents/CertificatEN.jpg";

export const certificates = [
    {
        name: "Certyfikat PL",
        language: "PL",
        date: "2025",
        institution: "YouCode",
        file: <img src={FrontendDeveloperPL} alt="Frontend Developer CertificatePL" />,
    },

    {
        name: "Certificate EN",
        language: "EN",
        date: "2025",
        institution: "YouCode",
        file: <img src={FrontendDeveloperEN} alt="Frontend Developer CertificateEN" />,
    }
];