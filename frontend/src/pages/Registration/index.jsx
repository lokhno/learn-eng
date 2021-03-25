import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Input, Button } from "antd";
import { Layout } from "antd";

import { userApi } from "../../utils/api/index";
import "./Registration.scss";
import openNotification from "../../utils/helpers/openNotification";

function Registration() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    return (
        <Layout className="layout registration-layout">
            <Form className="registration">
                <Form.Item
                    className="registration__item"
                    label="Имя пользователя"
                    name="username"
                >
                    <Input
                        className="registration__item_input"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item className="registration__item" label="E-mail" name="email">
                    <Input
                        className="registration__item_input"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </Form.Item>

                <Form.Item className="registration__item" label="Пароль" name="password">
                    <Input.Password
                        className="registration__item_input"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    className="registration__item"
                    label="Повторите пароль"
                    name="password2"
                >
                    <Input.Password
                        className="registration__item_input"
                        onChange={(e) => {
                            setRepeatPassword(e.target.value);
                        }}
                    />
                </Form.Item>

                <Form.Item className="registration__item">
                    <Button
                        type="primary"
                        className="registration__button"
                        onClick={async () => {
                            if (password === repeatPassword) {
                                const user = await userApi.createUser({
                                    user_name: userName,
                                    email: email,
                                    password: password,
                                });
                                openNotification('success', "Регистрация прошла успешно!")
                                console.log("", user.data);
                                setTimeout(() => {
                                    window.location.href = "/";
                                }, 1000);
                            } else {
                                openNotification('error', "Не совпадают пароли!")
                            }
                        }}
                    >
                        {/* <Link to="/words">Зарегистрироваться</Link> */}
                        Зарегистрироваться
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
