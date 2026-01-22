import React from "react";
import { RightsInfo } from "../styled";

export const Rights = () => {
    return (        
            <RightsInfo>
                © {new Date().getFullYear()} Rafał Olewicz. All rights reserved.
            </RightsInfo>       
    );
}