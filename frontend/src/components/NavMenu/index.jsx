import React, { useState } from "react";

import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userActions } from "../../redux/actions";

import "./NavMenu.scss";

const { Header } = Layout;

function NavMenu() {
    const dispatch = useDispatch();
    const [selectedMenuItem, setSelectedMenuItem] = useState(
        window.location.pathname.includes("categories")
            ? ["2"]
            : window.location.pathname.includes("learn")
            ? ["3"]
            : ["1"]
    );

    return (
        <Header className="header">
            <div className="header__logo-menu">
                <div>
                    <Link
                        className="header__logo"
                        to="/"
                        onClick={() => {
                            setSelectedMenuItem(["1"]);
                        }}
                    >
                        Learn ENG
                    </Link>
                </div>
                <Menu
                    className="header__menu"
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={selectedMenuItem}
                    onSelect={(e) => {
                        setSelectedMenuItem([e.key]);
                    }}
                >
                    <Menu.Item key="1">
                        <Link to="/words">Слова</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/categories">Категории</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/learn">Учить слова</Link>
                    </Menu.Item>
                </Menu>
            </div>
            <div>
                <div
                    className="header__logout"
                    onClick={() => {
                        window.localStorage.token = "";
                        dispatch(userActions.logout());
                    }}
                >
                    Выйти
                </div>
            </div>
        </Header>
    );
}

export default NavMenu;
