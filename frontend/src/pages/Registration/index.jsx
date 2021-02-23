import React from "react";
import { Link } from "react-router-dom";

import { Form, Input, Button } from "antd";
import { Layout } from "antd";

import "./Registration.scss";

function Registration() {
    return (
        <Layout className="layout registration-layout">
            <Form className="registration">
                <Form.Item
                    className="registration__item"
                    label="Имя пользователя"
                    name="username"
                >
                    <Input className="registration__item_input" />
                </Form.Item>
                <Form.Item className="registration__item" label="E-mail" name="email">
                    <Input className="registration__item_input" />
                </Form.Item>

                <Form.Item className="registration__item" label="Пароль" name="password">
                    <Input.Password className="registration__item_input" />
                </Form.Item>
                <Form.Item
                    className="registration__item"
                    label="Повторите пароль"
                    name="password2"
                >
                    <Input.Password className="registration__item_input" />
                </Form.Item>

                <Form.Item className="registration__item">
                    <Button type="primary" className="registration__button">
                        <Link to="/words">Зарегистрироваться</Link>
                    </Button>
                </Form.Item>
                <Form.Item className="registration__item">
                    <Button type="primary" className="registration__button">
                        <Link to="/auth">Войти</Link>
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
}

export default Registration;
