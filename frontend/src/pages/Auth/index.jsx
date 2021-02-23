import React from "react";
import { Link } from "react-router-dom";

import { Form, Input, Button } from "antd";
import { Layout } from "antd";

import "./Auth.scss";

function Auth() {
    return (
        <Layout className="layout auth-layout">
            <Form className="auth">
                <Form.Item
                    className="auth__item"
                    label="Имя пользователя"
                    name="username"
                >
                    <Input className="auth__item_input" />
                </Form.Item>

                <Form.Item className="auth__item" label="Пароль" name="password">
                    <Input.Password className="auth__item_input" />
                </Form.Item>
                <Form.Item className="auth__item">
                    <Button type="primary" className="auth__button">
                        <Link to="/words">Войти</Link>
                    </Button>
                </Form.Item>
                <Form.Item className="auth__item">
                    <Button type="primary" className="auth__button">
                        <Link to="/registration">На регистрацию</Link>
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
}

export default Auth;
