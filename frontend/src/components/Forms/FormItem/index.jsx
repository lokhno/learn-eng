import React from "react";

import { Form, Input, Select } from "antd";

const { Option } = Select;

function FormItem({ info, lable, defaultValue, onChange, focus }) {
    return (
        <Form.Item label={lable}>
            {info.type == "input" ? (
                <Input autoFocus={focus} defaultValue={defaultValue} onChange={onChange} />
            ) : info.type == "select" ? (
                <Select
                    defaultValue={defaultValue.title}
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
                    {info.items.map((item) => {
                        return (
                            <Option key={item._id} value={item._id}>
                                {item.title}
                            </Option>
                        );
                    })}
                </Select>
            ) : (
                <div></div>
            )}
        </Form.Item>
    );
}

export default FormItem;
