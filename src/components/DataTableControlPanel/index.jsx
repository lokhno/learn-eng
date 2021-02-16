import React, { useState } from "react";

import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import classnames from "classnames";

import { Button, Forms, CategoryForm } from "../";

function DataTableControlPanel({
    onDelete,
    items,
    onAdd,
    onEdit,
    selectedItems,
    objForm,
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
            {!overlayHidden &&
                (objForm === "WORDS" ? (
                    <Forms
                        setOverlayHidden={setOverlayHidden}
                        overlayHidden={overlayHidden}
                        formTypeInfo={{
                            type: formType,
                            update: formType === "EDIT" ? onEdit : onAdd,
                        }}
                        items={items}
                        selectedItems={selectedItems}
                    />
                ) : (
                    <CategoryForm
                        setOverlayHidden={setOverlayHidden}
                        overlayHidden={overlayHidden}
                        formTypeInfo={{
                            type: formType,
                            update: formType === "EDIT" ? onEdit : onAdd,
                        }}
                        items={items}
                        selectedItems={selectedItems}
                    />
                ))}
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
                disabled={!(selectedItems.length === 1)}
                className="words__add"
                name={"Редактировать"}
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                    setOverlayHidden(!overlayHidden);
                    setFormType("EDIT");
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
