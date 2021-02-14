import React from "react";

import { Form, Input, Button } from "antd";

import "./Learn.scss";

function Learn() {
    return (
        <Form className="form">
            <Form.Item label="На русском" name="rusWord">
                <Input />
            </Form.Item>
            <Form.Item label="На английском" name="engWord">
                <Input />
            </Form.Item>

            <Form.Item className="form__button">
                <Button onClick={()=> {console.log('Сохранить')}} type="primary">Сохранить</Button>
            </Form.Item>
           
        </Form>
    );
}

export default Learn;
