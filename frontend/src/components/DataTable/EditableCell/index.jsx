import React, { useState } from "react";

import { Input } from "antd";
import classnames from "classnames";

import "./EditableCell.scss";

const EditableCell = (props) => {
    let { title, input, children, dataIndex, record, checkvalue, ...restProps } = props;
    const [isCorrect, setIsCorrect] = useState(0);
    const [value, setValue] = useState("");

    let childNode = children;



    if (input) {
        childNode = (
            <div>
                <Input
                    className={classnames({
                        greenBorder: isCorrect == 1,
                        redBorder: isCorrect == -1,
                    })}
                    onChange={(e) => {
                        checkvalue(e, record, setIsCorrect);
                        setValue(e.target.value)
                    }}
                />
            </div>
        );
    }
    
    return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;
