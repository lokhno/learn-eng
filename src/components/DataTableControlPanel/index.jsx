import React, { useState } from "react";

import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import classnames from "classnames";

import { Button, Forms } from "../";

function DataTableControlPanel() {
    const [overlayHidden, setOverlayHidden] = useState(true);

    return (
        <div>
            <div
                className={classnames("overlay", { overlay_hide: overlayHidden })}
                onClick={() => {
                    setOverlayHidden(!overlayHidden);
                }}
            ></div>
            {!overlayHidden && (
                <Forms
                    setOverlayHidden={setOverlayHidden}
                    overlayHidden={overlayHidden}
                />
            )}
            <Button
                className="words__add"
                name={"Добавить"}
                icon={<PlusCircleOutlined />}
                onClick={() => {
                    setOverlayHidden(!overlayHidden);
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
