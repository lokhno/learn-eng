import React from "react";

import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { Button } from "../";

function DataTableControlPanel() {
    return (
        <div>
            <div
                id="overlay"
                onClick={() => {
                    document.getElementById("overlay").style.display = "none";
                }}
            >
                <div id="text">Окно добавления</div>
            </div>
            <Button
                className="words__add"
                name={"Добавить"}
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => {
                    document.getElementById("overlay").style.display = "block";
                }}
            />
            <Button
                className="words__add"
                name={"Редактировать"}
                type="primary"
                icon={<EditOutlined />}
            />
            <Button
                className="words__add"
                name={"Удалить"}
                type="primary"
                icon={<DeleteOutlined />}
            />
        </div>
    );
}

export default DataTableControlPanel;
