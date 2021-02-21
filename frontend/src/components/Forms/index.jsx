import React, { useState } from "react";

import { Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { wordsActions } from "../../redux/actions";
import { Button } from "../";

import "./Forms.scss";

const { Option } = Select;

function Forms({ overlayHidden, setOverlayHidden, formTypeInfo, items, selectedItems }) {
    const [rusWordValue, setRusWordValue] = useState("");
    const [engWordValue, setEngWordValue] = useState("");
    const [category, setCategory] = useState("");

    const categories = useSelector((state) => state.categories.items);

    const dispatch = useDispatch();

    function onChange(value, categoryInfo) {
        setCategory(categoryInfo.key);
    }

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
            <Form.Item label="Категория" name="category">
                <Select
                    defaultValue={getSelectedWord() && +getSelectedWord().category}
                    showSearch
                    style={{ width: 395 }}
                    placeholder=""
                    optionFilterProp="item"
                    onChange={onChange}
                    filterOption={(input, option) => {
                        return (
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        );
                    }}
                >
                    {categories.map((category) => {
                        return (
                            <Option key={category._id} value={category._id}>
                                {category.categoryTitle}
                            </Option>
                        );
                    })}
                </Select>
            </Form.Item>

            <Form.Item className="form__button">
                <Button
                    className="form__save-button"
                    name={"Сохранить"}
                    onClick={() => {
                        
                        formTypeInfo.update({
                            engWord: engWordValue,
                            rusWord: rusWordValue,
                            category: category,
                        });

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
