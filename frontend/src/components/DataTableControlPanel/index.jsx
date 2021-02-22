import React, { useState } from "react";

import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import classnames from "classnames";

import { Button, Forms } from "../";

function DataTableControlPanel({
    onDelete,
    items,
    onAdd,
    onEdit,
    selectedItems,
    formFields,
}) {
    const [overlayHidden, setOverlayHidden] = useState(true);
    const [formType, setFormType] = useState("");

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
                    formFields={formFields}
                    setOverlayHidden={setOverlayHidden}
                    overlayHidden={overlayHidden}
                    formTypeInfo={{
                        type: formType,
                        update: formType === "EDIT" ? onEdit : onAdd,
                    }}
                    items={items}
                    selectedItems={selectedItems}
                />
            )}
            <Button
                className="words__add"
                name={"Добавить"}
                icon={<PlusCircleOutlined />}
                onClick={() => {
                    setOverlayHidden(!overlayHidden);
                    setFormType("ADD");
                }}
            />
            <Button
                className="words__add"
                disabled={!(selectedItems.length === 1)}
                name={"Редактировать"}
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                    setOverlayHidden(!overlayHidden);
                    setFormType("EDIT");
                    formFields.forEach(element => {
                        element.onChangeValue(items.filter((item) => item.key === selectedItems[0])[0][element.key])
                    });
                }}
            />
            <Button
                disabled={!(selectedItems.length >= 1)}
                className="words__add"
                name={"Удалить"}
                type="primary"
                icon={<DeleteOutlined />}
                onClick={onDelete}
            />
        </div>
    );
}

export default DataTableControlPanel;
