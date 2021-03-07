import React from "react";

import { Form } from "antd";

import { Button } from "../";
import FormItem from "./FormItem";

import "./Forms.scss";

function Forms({
    overlayHidden,
    setOverlayHidden,
    formTypeInfo,
    items,
    selectedItems,
    formFields,
}) {
    const getSelectedItem = (key) => {

        return items.filter((item) => item._id === selectedItems[0])[0][key];
    };
    return (
        <Form className="form">
            {formFields.map((field, index) => {
                return (
                    <FormItem
                        key={index}
                        info={field.info}
                        lable={field.title}
                        defaultValue={
                            formTypeInfo.type === "EDIT" ? getSelectedItem(field.key) : ""
                        }
                        onChange={field.onChangeValue}
                        focus={field.focus}
                    />
                );
            })}

            <Form.Item className="form__button">
                <Button
                    className="form__save-button"
                    name={"Сохранить"}
                    onClick={() => {
                        formTypeInfo.update();
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

export default Forms;
