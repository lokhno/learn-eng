import React from "react";

import { Layout } from "antd";
import { useSelector } from "react-redux";

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


const { Content } = Layout;

const Words = () => {
    const data = useSelector(({ words }) => {
        return words.items;
    });

    return (
        <Content className="words">
            <DataTableControlPanel />
            <DataTable columns={columns} data={data} />
        </Content>
    );
};

export default Words;
