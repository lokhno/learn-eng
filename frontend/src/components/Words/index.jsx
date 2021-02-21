import React, { useState } from "react";

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
    const [selectedWords, setSelectedWords] = useState([]);

    const data = useSelector(({ words }) => {
        return words.items;
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
            }, selectedWords)
        );
        setSelectedWords([])
    };

    const deleteWords = () => {
        dispatch(wordsActions.deleteWords(selectedWords));
        setSelectedWords([])
    };

    return (
        <Content className="words">
            <DataTableControlPanel
                objForm="WORDS"
                onDelete={deleteWords}
                items={data}
                onAdd={addWord}
                onEdit={editWord}
                selectedItems={selectedWords}
            />
            <DataTable
                columns={columns}
                data={data}
                selectedItems={selectedWords}
                setSelectedItems={setSelectedWords}
                objForm="WORDS"
            />
        </Content>
    );
};

export default Words;
