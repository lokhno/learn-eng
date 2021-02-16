import React from "react";

import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { DataTable, DataTableControlPanel } from "../";
import { wordsActions } from "../../redux/actions";

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

    const selectedItems = useSelector(({ words }) => {
        return words.selectedWords;
    });

    const dispatch = useDispatch();

    const addWord = (item) => {
        dispatch(
            wordsActions.addWord({
                engWord: item.engWord,
                rusWord: item.rusWord,
            })
        );
    };

    const editWord = (item) => {
        dispatch(
            wordsActions.editWord({
                engWord: item.engWord,
                rusWord: item.rusWord,
            })
        );
    };

    const deleteWords = () => {
        dispatch(wordsActions.deleteWords());
    };

    return (
        <Content className="words">
            <DataTableControlPanel
                objForm="WORDS"
                onDelete={deleteWords}
                items={data}
                onAdd={addWord}
                onEdit={editWord}
                selectedItems={selectedItems}
            />
            <DataTable columns={columns} data={data} objForm="WORDS" />
        </Content>
    );
};

export default Words;
