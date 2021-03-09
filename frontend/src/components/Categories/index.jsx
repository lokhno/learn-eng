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
        dispatch(categoriesActions.fetchCategories(user._id));
    }, []);

    const categories = useSelector(({ categories }) => {
        return categories.items;
    });
    const user = useSelector(({ user }) => {
        return user.data;
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
            categoriesActions.fetchAddCategories(
                {
                    title: formFields.filter((item) => item.key == "title")[0]
                        .valueInForm,
                },
                user._id
            )
        );
    };

    const editCategory = () => {
        dispatch(
            categoriesActions.fetchEditCategory(
                {
                    title: formFields.filter((item) => item.key == "title")[0]
                        .valueInForm,
                    _id: selectedCategories[0],
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
