import React, { useState, useEffect } from "react";

import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { DataTable, DataTableControlPanel, Button } from "../";
import { wordsActions, categoriesActions, userActions } from "../../redux/actions";

import "./Words.scss";

const { Content } = Layout;

const Words = () => {
    const [selectedWords, setSelectedWords] = useState([]);
    const [rusWordValueInForm, setRusWordValueInForm] = useState("");
    const [engWordValueInForm, setEngWordValueInForm] = useState("");
    const [categoryInForm, setCategoryInForm] = useState("");
    const [isOpenItemsRus, setIsOpenItemsRus] = useState(false);
    const [isOpenItemsEng, setIsOpenItemsEng] = useState(false);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [isShuffled, setisShuffled] = useState(false);
    const [shuffledWords, setShuffledWords] = useState([]);
    const user = useSelector(({ user }) => {
        return user.data;
    });
    useEffect(() => {
        user && dispatch(wordsActions.fetchWords(user._id));
        user && dispatch(categoriesActions.fetchCategories(user._id));
    }, [user]);

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
                        setIsCorrect(1);
                    } else {
                        setIsCorrect(-1);
                    }
                }
            },
            width: "32.5%",
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
                        setIsCorrect(1);
                    } else {
                        setIsCorrect(-1);
                    }
                }
            },
            width: "32.5%",
        },
        {
            title: "Категория",
            dataIndex: ["category", "title"],
            key: "category",
            filters: categories
                ? categories.map((item) => {
                      return { text: item.title, value: item.title };
                  })
                : [],
            filteredValue: filteredInfo.category || null,
            onFilter: (value, record) => record.category.title.includes(value),
            ellipsis: true,
            width: "32.5%",
        },
    ];

    const handleChange = (pagination, filters) => {
        setFilteredInfo(filters);
    };

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
            wordsActions.fetchAddWord(
                {
                    engWord: formFields.filter((item) => item.key == "engWord")[0]
                        .valueInForm,
                    rusWord: formFields.filter((item) => item.key == "rusWord")[0]
                        .valueInForm,
                    category_id: formFields.filter((item) => item.key == "category")[0]
                        .valueInForm,
                },
                user._id
            )
        );
    };

    const editWord = () => {
        const getValue = (inputKey) => {
            let value = "";
            let field = formFields.filter((item) => item.key == inputKey)[0].valueInForm;
            if (field[inputKey]) {
                value = field[inputKey];
            } else {
                value = field;
            }
            return value;
        };

        dispatch(
            wordsActions.fetchEditWord(
                {
                    engWord: getValue("engWord"),
                    rusWord: getValue("rusWord"),
                    category: getValue("category"),
                    _id: selectedWords[0],
                },
                selectedWords
            )
        );
        setSelectedWords([]);
    };

    const deleteWords = () => {
        dispatch(wordsActions.fetchDeleteWord(selectedWords));
        setSelectedWords([]);
    };
    //вспомогательная функция
    function putToCache(elem, cache) {
        if (cache.indexOf(elem) != -1) {
            return;
        }
        var i = Math.floor(Math.random() * (cache.length + 1));
        cache.splice(i, 0, elem);
    }
    //функция, возвращающая свеженький, девственный компаратор
    function madness() {
        var cache = [];
        return function (a, b) {
            putToCache(a, cache);
            putToCache(b, cache);
            return cache.indexOf(b) - cache.indexOf(a);
        };
    }
    //собственно функция перемешивания
    function shuffle(arr) {
        var compare = madness();
        return arr.sort(compare);
    }
    console.log(isShuffled);
    return (
        <Content>
            <DataTableControlPanel
                onDelete={deleteWords}
                items={words}
                onAdd={addWord}
                onEdit={editWord}
                selectedItems={selectedWords}
                formFields={formFields}
                handleisShuffled={(value) => {
                    console.log("handleisShuffled", value)
                    setisShuffled(value);
                    if (value) {
                        setShuffledWords(shuffle([...words]));
                    }
                }}
                isShuffled={isShuffled}
            />
            <DataTable
                columns={columns}
                isOpenItems={isOpenItemsRus || isOpenItemsEng}
                data={!isShuffled ? words : shuffledWords}
                selectedItems={selectedWords}
                setSelectedItems={setSelectedWords}
                onChange={handleChange}
            />
        </Content>
    );
};

export default Words;
