import React from "react";

import { Layout } from "antd";

import { DataTable, DataTableControlPanel } from "../";

import "./Words.scss";

const columns = [
    {
        title: "Слово на русском",
        dataIndex: "rusWord",
        key: "rusWord",
    },
    {
        title: "Слово на английском",
        dataIndex: "engWord",
        key: "engWord",
    },
];

const data = [
    {
        key: "1",
        engWord: "age",
        rusWord: "возраст",
    },
    {
        key: "2",
        engWord: "figure out",
        rusWord: "понимать",
    },
];

const { Content } = Layout;

const Words = () => {
    return (
        <Content className="words">
            <DataTableControlPanel />
            <DataTable columns={columns} data={data} />
        </Content>
    );
};

export default Words;
