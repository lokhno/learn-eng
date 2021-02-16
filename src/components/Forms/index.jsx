import React, { useState } from "react";

import { Form, Input } from "antd";
import { useDispatch } from "react-redux";

import { wordsActions } from "../../redux/actions";
import { Button } from "../";

import "./Forms.scss";

function Forms({ overlayHidden, setOverlayHidden, formTypeInfo, items, selectedItems }) {
    const [rusWordValue, setRusWordValue] = useState("");
    const [engWordValue, setEngWordValue] = useState("");
    console.log("formTypeInfo", formTypeInfo)

    const dispatch = useDispatch();

    const getSelectedWord = () => {
        return items.filter((item) => item.key === selectedItems[0])[0];
    };
    return (
        <Form className="form">
            <Form.Item label="На русском" name="rusWord">
                <Input
                    defaultValue={
                        formTypeInfo.type === "EDIT" ? getSelectedWord().rusWord : ""
                    }
                    onChange={(e) => {
                        setRusWordValue(e.target.value);
                    }}
                />
            </Form.Item>
            <Form.Item label="На английском" name="engWord">
                <Input
                    defaultValue={
                        formTypeInfo.type === "EDIT" ? getSelectedWord().engWord : ""
                    }
                    onChange={(e) => {
                        setEngWordValue(e.target.value);
                    }}
                />
            </Form.Item>

            <Form.Item className="form__button">
                <Button
                    className="form__save-button"
                    name={"Сохранить"}
                    onClick={() => {
                        formTypeInfo.update({
                            engWord: engWordValue,
                            rusWord: rusWordValue,
                        });
                        if (formTypeInfo.type === "EDIT") {
                            dispatch(
                                wordsActions.setSelectedWords({
                                    selectedWords: [],
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

export default Forms;
