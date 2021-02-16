import React, { useState } from "react";

import { Form, Input } from "antd";
import { useDispatch } from "react-redux";

import { categoriesActions } from "../../redux/actions";
import { Button } from "../";

import "./CategoryForm.scss";

function CategoryForm({
    overlayHidden,
    setOverlayHidden,
    formTypeInfo,
    items,
    selectedItems,
}) {
    const [categoryTitleValue, setCategoryTitleValue] = useState("");

    const dispatch = useDispatch();

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
                        if (formTypeInfo.type === "EDIT") {
                            dispatch(
                                categoriesActions.setSelectedCategories({
                                    selectedCategories: [],
                                })
                            );
                        }
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
