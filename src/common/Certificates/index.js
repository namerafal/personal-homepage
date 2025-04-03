import React, { useState } from "react";
import { certificates } from "./certificates.js";
import { List, Item, } from "./styled";
import { usePreventDefaultHandlers } from "../../utils.js";

export const Certificates = () => {
    const [isHoverDisabled, setIsHoverDisabled] = useState(false);
    const preventUserActions = usePreventDefaultHandlers();

    const handleItemClick = () => {
        setIsHoverDisabled((prev) => !prev);
    };

    return (
        <List {...preventUserActions}>
            {certificates.map(({ name, file }) => (
                <Item
                    key={name}
                    {...file}
                    {...preventUserActions}
                    onClick={handleItemClick}
                    className={isHoverDisabled ? "hover-disabled" : ""}
                >
                    {React.cloneElement(file, {title: name})}
                </Item>
            ))}
        </List>
    );
};