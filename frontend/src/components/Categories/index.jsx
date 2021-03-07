import React, { useState, useEffect } from "react";

import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { DataTable, DataTableControlPanel } from "../";
import { categoriesActions } from "../../redux/actions";

import "./Categories.scss";

const columns = [
    {
        title: "Название",
        dataIndex: "title",
        key: "title",
    },
];

const { Content } = Layout;

const Categories = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [titleInForm, setTitleInForm] = useState("");
    useEffect(() => {
        dispatch(categoriesActions.fetchCategories("60414c9fdeefc965c8df5b6a"));
    }, []);

    const categories = useSelector(({ categories }) => {
        return categories.items;
    });

    const formFields = [
        {
            title: "Название",
            dataIndex: "title",
            key: "title",
            info: { type: "input" },
            valueInForm: titleInForm,
            onChangeValue: (e) => {
                if (e.target) {
                    setTitleInForm(e.target.value);
                } else {
                    setTitleInForm(e);
                }
            },
            focus: true,
        },
    ];

    const dispatch = useDispatch();

    const addCategory = () => {
        dispatch(
            categoriesActions.fetchAddCategories({
                title: formFields.filter((item) => item.key == "title")[0].valueInForm,
            })
        );
    };

    const editCategory = () => {
        dispatch(
            categoriesActions.editCategory(
                {
                    title: formFields.filter((item) => item.key == "title")[0]
                        .valueInForm,
                },
                selectedCategories
            )
        );
    };

    const deleteCategories = () => {
        dispatch(categoriesActions.fetchDeleteCategory(selectedCategories));
    };

    return (
        <Content>
            <DataTableControlPanel
                onDelete={deleteCategories}
                items={categories}
                onAdd={addCategory}
                onEdit={editCategory}
                selectedItems={selectedCategories}
                formFields={formFields}
            />
            <DataTable
                columns={columns}
                data={categories}
                selectedItems={selectedCategories}
                setSelectedItems={setSelectedCategories}
            />
        </Content>
    );
};

export default Categories;
