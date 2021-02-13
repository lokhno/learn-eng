import React from "react";

import { Layout } from "antd";

import { DataTable, DataTableControlPanel } from "../";

import "./Categories.scss";

const columns = [
    {
        title: "Название",
        dataIndex: "CategoryTitle",
        key: "CategoryTitle",
    },
];

const data = [
    {
        key: "1",
        CategoryTitle: "Фразовые глаголы",
    },
];

const { Content } = Layout;

const Home = () => {
    return (
        <Content>
            <DataTableControlPanel />
            <DataTable columns={columns} data={data} />
        </Content>
    );
};

export default Home;
