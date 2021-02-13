import React from "react";

import { Button as AntButton } from "antd";
import classnames from "classnames";

import "./Button.scss";

function Button({ icon, name, className, onClick }) {
    return (
        <AntButton
            className={classnames(className, "button_size")}
            type="primary"
            icon={icon}
            onClick={onClick}
        >
            {name}
        </AntButton>
    );
}

export default Button;
