import React from "react";
import { useSelector } from "react-redux";

import { Form, Select, Button } from "antd";

import "./Learn.scss";

const { Option } = Select;

function Learn() {
    const categories = useSelector(({ categories }) => {
        return [...categories.items, { _id: 0, title: "Все", key: 0 }] ;
    });
    return (
        <div className="learn-form">
            <Form className="learn">
                <Form.Item className="learn__item" label="Категории" name="category">
                    <Select
                        initialvalues={""}
                        showSearch
                        style={{ width: 425 }}
                        placeholder=""
                        optionFilterProp="item"
                        onChange={(e) => {
                            console.log(e);
                        }}
                        filterOption={(input, option) => {
                            return (
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            );
                        }}
                    >
                        {categories.map((item) => {
                            return (
                                <Option key={item._id} value={item._id}>
                                    {item.title}
                                </Option>
                            );
                        })}
                    </Select>
                </Form.Item>

                <Form.Item className="learn__item">
                    <Button type="primary" className="learn__button">
                        Го учить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Learn;
