import React, { useState } from "react";

import { Form, Input } from "antd";

import { Button } from "../";

import "./CategoryForm.scss";

function CategoryForm({
    overlayHidden,
    setOverlayHidden,
    formTypeInfo,
    items,
    selectedItems,
    setSelectedItems,
}) {
    const [categoryTitleValue, setCategoryTitleValue] = useState("");

    const getSelectedCategory = () => {
        return items.filter((item) => item.key === selectedItems[0])[0];
    };
    return (
        <Form className="form">
            <Form.Item label="Название" name="categoryTitle">
                <Input
                    defaultValue={
                        formTypeInfo.type === "EDIT"
                            ? getSelectedCategory().categoryTitle
                            : ""
                    }
                    onChange={(e) => {
                        setCategoryTitleValue(e.target.value);
                    }}
                />
            </Form.Item>

            <Form.Item className="form__button">
                <Button
                    className="form__save-button"
                    name={"Сохранить"}
                    onClick={() => {
                        formTypeInfo.update({
                            categoryTitle: categoryTitleValue,
                        });
                        setSelectedItems([]);
                        setOverlayHidden(!overlayHidden);
                    }}
                    type="primary"
                />

                <Button
                    name={"Отмена"}
                    onClick={() => {
                        setOverlayHidden(!overlayHidden);
                    }}
                    type="primary"
                />
            </Form.Item>
        </Form>
    );
}

export default CategoryForm;
