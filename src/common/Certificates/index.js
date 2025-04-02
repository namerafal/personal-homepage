import React, { useState } from "react";
import { certificates } from "./certificates.js";
import { List, Item, } from "./styled";

export const Certificates = () => {
    const [isHoverDisabled, setIsHoverDisabled] = useState(false);

    const handleItemClick = () => {
        setIsHoverDisabled((prev) => !prev);
    };

    const preventCopy = (event) => {
        event.preventDefault();        
    };

    return (
        <List onContextMenu={(e) => e.preventDefault()}>
            {certificates.map(({ name, file }) => (
                <Item
                    key={name}{...file}
                    onClick={handleItemClick}
                    onCopy={preventCopy}
                    className={isHoverDisabled ? "hover-disabled" : ""}
                >
                    {React.cloneElement(file, {title: name})}
                </Item>
            ))}
        </List>
    );
};