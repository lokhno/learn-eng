import React, { useState } from "react";

import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { DataTable, DataTableControlPanel, Button } from "../";
import { wordsActions } from "../../redux/actions";

import "./Words.scss";

const { Content } = Layout;

const Words = () => {
    const [selectedWords, setSelectedWords] = useState([]);
    const [rusWordValueInForm, setRusWordValueInForm] = useState("");
    const [engWordValueInForm, setEngWordValueInForm] = useState("");
    const [categoryInForm, setCategoryInForm] = useState("");
    const [isOpenItemsRus, setIsOpenItemsRus] = useState(false);
    const [isOpenItemsEng, setIsOpenItemsEng] = useState(false);

    const words = useSelector(({ words }) => {
        return words.items;
    });
    const categories = useSelector(({ categories }) => {
        return categories.items;
    });

    const columns = [
        {
            title: () => {
                return (
                    <div className="with-button">
                        Слово на русском{" "}
                        <Button
                            disabled={isOpenItemsEng}
                            name={!isOpenItemsRus ? "Скрыть" : "Открыть"}
                            onClick={() => {
                                setIsOpenItemsRus(!isOpenItemsRus);
                            }}
                        />
                    </div>
                );
            },

            dataIndex: "rusWord",
            key: "rusWord",
            input: isOpenItemsRus,
            checkvalue: (e, record, setIsCorrect) => {
                if (e.target.value === "") {
                    setIsCorrect(0);
                } else {
                    if (
                        e.target.value.toLocaleLowerCase() ===
                        record.rusWord.toLocaleLowerCase()
                    ) {
                        console.log("Верно");
                        setIsCorrect(1);
                    } else {
                        setIsCorrect(-1);
                    }
                }
            },
            width: "30%",
        },
        {
            title: () => {
                return (
                    <div className="with-button">
                        Слово на английском{" "}
                        <Button
                            disabled={isOpenItemsRus}
                            name={!isOpenItemsEng ? "Скрыть" : "Открыть"}
                            onClick={() => {
                                setIsOpenItemsEng(!isOpenItemsEng);
                            }}
                        />
                    </div>
                );
            },
            dataIndex: "engWord",
            key: "engWord",
            input: isOpenItemsEng,
            checkvalue: (e, record, setIsCorrect) => {
                if (e.target.value === "") {
                    setIsCorrect(0);
                } else {
                    if (
                        e.target.value.toLocaleLowerCase() ===
                        record.engWord.toLocaleLowerCase()
                    ) {
                        console.log("Верно");
                        setIsCorrect(1);
                    } else {
                        setIsCorrect(-1);
                    }
                }
            },
            width: "30%",
        },
        {
            title: "Категория",
            dataIndex: "category",
            key: "category",
        },
    ];

    const formFields = [
        {
            title: "На русском",
            dataIndex: "rusWord",
            key: "rusWord",
            info: { type: "input" },
            valueInForm: rusWordValueInForm,
            onChangeValue: (e) => {
                if (e.target) {
                    setRusWordValueInForm(e.target.value);
                } else {
                    setRusWordValueInForm(e);
                }
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
                if (e.target) {
                    setEngWordValueInForm(e.target.value);
                } else {
                    setEngWordValueInForm(e);
                }
            },
        },
        {
            title: "Категория",
            dataIndex: "category",
            key: "category",
            info: { type: "select", items: categories },
            valueInForm: categoryInForm,
            onChangeValue: (v, categoryInfo) => {
                if (categoryInfo) {
                    setCategoryInForm(categoryInfo.key);
                } else {
                    setCategoryInForm(v);
                }
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
                isOpenItems={isOpenItemsRus || isOpenItemsEng}
                data={words}
                selectedItems={selectedWords}
                setSelectedItems={setSelectedWords}
            />
        </Content>
    );
};

export default Words;
