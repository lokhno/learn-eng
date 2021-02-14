import React, { useState } from "react";

import { Form, Input } from "antd";
import { useDispatch } from "react-redux";

import { wordsActions } from "../../redux/actions";
import { Button } from "../";

import "./Forms.scss";

function Forms({ overlayHidden, setOverlayHidden }) {
    const [rusWordValue, setRusWordValue] = useState("");
    const [engWordValue, setEngWordValue] = useState("");

    const dispatch = useDispatch();
    return (
        <Form className="form">
            <Form.Item label="На русском" name="rusWord">
                <Input
                    onChange={(e) => {
                        setRusWordValue(e.target.value);
                    }}
                />
            </Form.Item>
            <Form.Item className="qwe" label="На английском" name="engWord">
                <Input
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
                        dispatch(
                            wordsActions.addWord({
                                engWord: engWordValue,
                                rusWord: rusWordValue,
                            })
                        );
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
