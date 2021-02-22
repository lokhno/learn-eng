import React from "react";
import { Table, Input } from "antd";

import EditableCell from "./EditableCell";
import EditableRow from "./EditableRow";

import "./DataTable.scss";

const DataTable = ({ columns, data, selectedItems, setSelectedItems, isOpenItems }) => {
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const newcolumns = columns.map((col) => {
        if (!col.input) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => {
                return {
                    record,
                    input: col.input,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    checkvalue: col.checkvalue,
                };
            },
        };
    });
    return (
        <Table
            components={isOpenItems ? components : false}
            bordered
            className="content"
            rowSelection={{
                selectedRowKeys: selectedItems,
                type: "checkbox",
                onChange: (selectedRowKeys) => {
                    setSelectedItems(selectedRowKeys);
                },
            }}
            columns={newcolumns}
            dataSource={data}
            pagination={{
                defaultPageSize: 20,
            }}
        />
    );
};

export default DataTable;
