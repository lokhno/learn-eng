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
    {
        title: "Категория",
        dataIndex: "category",
        key: "category",
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

    const addWord = ({ engWord, rusWord, category }) => {
        dispatch(
            wordsActions.addWord({
                engWord,
                rusWord,
                category,
            })
        );
    };

    const editWord = ({ engWord, rusWord, category }) => {
        dispatch(
            wordsActions.editWord({
                engWord,
                rusWord,
                category,
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
