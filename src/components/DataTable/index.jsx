import React, { useState } from "react";

import { Table } from "antd";
import { useDispatch } from "react-redux";

import { wordsActions, categoriesActions } from "../../redux/actions";

import "./DataTable.scss";

const DataTable = ({ columns, data, objForm }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <Table
                rowSelection={{
                    type: "checkbox",
                    onChange: (selectedRowKeys) => {
                        const action =
                            objForm === "WORDS"
                                ? wordsActions.setSelectedWords({
                                      selectedWords: selectedRowKeys,
                                  })
                                : categoriesActions.setSelectedCategories({
                                      selectedCategories: selectedRowKeys,
                                  });
                        dispatch(action);
                    },
                }}
                className="content"
                columns={columns}
                dataSource={data}
                pagination={{
                    defaultPageSize: 20,
                }}
            />
        </div>
    );
};

export default DataTable;
