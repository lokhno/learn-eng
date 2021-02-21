import React, { useState } from "react";

import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { DataTable, DataTableControlPanel } from "../";
import { categoriesActions } from "../../redux/actions";

import "./Categories.scss";

const columns = [
    {
        title: "Название",
        dataIndex: "categoryTitle",
        key: "categoryTitle",
    },
];

const { Content } = Layout;

const Categories = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const data = useSelector(({ categories }) => {
        return categories.items;
    });

    const dispatch = useDispatch();

    const addCategory = (item) => {
        dispatch(
            categoriesActions.addCategory({
                categoryTitle: item.categoryTitle,
            })
        );
    };

    const editCategory = (item) => {
        dispatch(
            categoriesActions.editCategory({
                categoryTitle: item.categoryTitle,
            }, selectedCategories)
        );
    };

    const deleteCategories = () => {
        dispatch(categoriesActions.deleteCategories(selectedCategories));
    };

    return (
        <Content>
            <DataTableControlPanel
                objForm="CATEGORIES"
                onDelete={deleteCategories}
                items={data}
                onAdd={addCategory}
                onEdit={editCategory}
                selectedItems={selectedCategories}
                setSelectedItems={setSelectedCategories}
            />
            <DataTable
                columns={columns}
                data={data}
                selectedItems={selectedCategories}
                setSelectedItems={setSelectedCategories}
                objForm="CATEGORIES"
            />
        </Content>
    );
};

export default Categories;
