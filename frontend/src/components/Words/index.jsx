import React, { useState } from "react";

import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { DataTable, DataTableControlPanel } from "../";
import { wordsActions } from "../../redux/actions";

import "./Words.scss";

const { Content } = Layout;

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

const Words = () => {
    const [selectedWords, setSelectedWords] = useState([]);
    const [rusWordValueInForm, setRusWordValueInForm] = useState("");
    const [engWordValueInForm, setEngWordValueInForm] = useState("");
    const [categoryInForm, setCategoryInForm] = useState("");

    const words = useSelector(({ words }) => {
        return words.items;
    });
    const categories = useSelector(({ categories }) => {
        return categories.items;
    });

    const formFields = [
        {
            title: "На русском",
            dataIndex: "rusWord",
            key: "rusWord",
            info: { type: "input" },
            valueInForm: rusWordValueInForm,
            onChangeValue: (e) => {
                setRusWordValueInForm(e.target.value);
            },
            focus: true,
        },
        {
            title: "На английском",
            dataIndex: "engWord",
            key: "engWord",
            info: { type: "input" },
            valueInForm: engWordValueInForm,
            onChangeValue: (e) => {
                setEngWordValueInForm(e.target.value);
            },
        },
        {
            title: "Категория",
            dataIndex: "category",
            key: "category",
            info: { type: "select", items: categories },
            valueInForm: categoryInForm,
            onChangeValue: (value, categoryInfo) => {
                setCategoryInForm(categoryInfo.key);
            },
        },
    ];

    const dispatch = useDispatch();

    const addWord = () => {
        dispatch(
            wordsActions.addWord({
                engWord: formFields.filter((item) => item.key == "engWord")[0]
                    .valueInForm,
                rusWord: formFields.filter((item) => item.key == "rusWord")[0]
                    .valueInForm,
                category: formFields.filter((item) => item.key == "category")[0]
                    .valueInForm,
            })
        );
    };

    const editWord = () => {
        dispatch(
            wordsActions.editWord(
                {
                    engWord: formFields.filter((item) => item.key == "engWord")[0]
                        .valueInForm,
                    rusWord: formFields.filter((item) => item.key == "rusWord")[0]
                        .valueInForm,
                    category: formFields.filter((item) => item.key == "category")[0]
                        .valueInForm,
                },
                selectedWords
            )
        );
        setSelectedWords([]);
    };

    const deleteWords = () => {
        dispatch(wordsActions.deleteWords(selectedWords));
        setSelectedWords([]);
    };


    return (
        <Content>
            <DataTableControlPanel
                onDelete={deleteWords}
                items={words}
                onAdd={addWord}
                onEdit={editWord}
                selectedItems={selectedWords}
                formFields={formFields}
            />
            <DataTable
                columns={columns}
                data={words}
                selectedItems={selectedWords}
                setSelectedItems={setSelectedWords}
            />
        </Content>
    );
};

export default Words;
