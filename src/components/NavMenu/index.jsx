import React from "react";

import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

import "./NavMenu.scss";

const { Header } = Layout;

function NavMenu() {
    // TODO Пофиксить подсветку вкладок (при перезагрузке и при клике на лого)
    return (
        <Header className="header">
            <div>
                <Link className="header__logo" to="/">
                    Learn ENG
                </Link>
            </div>
            <Menu
                className="header__menu"
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
            >
                <Menu.Item key="1">
                    <Link to="/words">Слова</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/categories">Категории</Link>
                </Menu.Item>
                <Menu.Item key="3">Учить слова</Menu.Item>
            </Menu>
        </Header>
    );
}

export default NavMenu;
