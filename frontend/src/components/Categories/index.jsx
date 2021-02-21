import React from "react";

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

const Home = () => {
    const data = useSelector(({ categories }) => {
        return categories.items;
    });

    const selectedItems = useSelector(({ categories }) => {
        return categories.selectedCategories;
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
            })
        );
    };

    const deleteCategories = () => {
        dispatch(categoriesActions.deleteCategories());
    };

    return (
        <Content>
            <DataTableControlPanel
                objForm="CATEGORIES"
                onDelete={deleteCategories}
                items={data}
                onAdd={addCategory}
                onEdit={editCategory}
                selectedItems={selectedItems}
            />
            <DataTable columns={columns} data={data} objForm="CATEGORIES" />
        </Content>
    );
};

export default Home;
