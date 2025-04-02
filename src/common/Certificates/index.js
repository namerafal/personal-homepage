import React, { useState } from "react";
import { certificates } from "./certificates.js";
import { List, Item, } from "./styled";

export const Certificates = () => {
    const [isHoverDisabled, setIsHoverDisabled] = useState(false);

    const handleItemClick = () => {
        setIsHoverDisabled((prev) => !prev);
    };

    return (
        <List>
            {certificates.map(({ name, file }) => (
                <Item
                    key={name}{...file}
                    onClick={handleItemClick}
                    className={isHoverDisabled ? "hover-disabled" : ""}
                >
                    {React.cloneElement(file, {title: name})}
                </Item>
            ))}
        </List>
    );
};