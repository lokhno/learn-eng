import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Form, Input, Button } from "antd";
import { Layout } from "antd";

import { userActions } from "../../redux/actions";
import openNotification from "../../utils/helpers/openNotification";

import "./Auth.scss";

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    return (
        <Layout className="layout auth-layout">
            <Form className="auth">
                <Form.Item className="auth__item" label="Email" name="email">
                    <Input
                        className="auth__item_input"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </Form.Item>

                <Form.Item className="auth__item" label="Пароль" name="password">
                    <Input.Password
                        className="auth__item_input"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item className="auth__item">
                    <Button
                        type="primary"
                        className="auth__button"
                        onClick={() => {
                            dispatch(
                                userActions.fetchUserLogin({
                                    email: email,
                                    password: password,
                                })
                            ).then((info) => {
                                if (info.message === "Success") {
                                    openNotification(
                                        "success",
                                        "Акторизация прошла успешно!"
                                    );
                                    setTimeout(() => {
                                        // window.location.href = "/";
                                    }, 1000);
                                } else {
                                    openNotification(
                                        "error",
                                        "Неверный логин или пароль!"
                                    );
                                }
                            });
                        }}
                    >
                        {/* <Link to="/words">Войти</Link> */}
                        Войти
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
