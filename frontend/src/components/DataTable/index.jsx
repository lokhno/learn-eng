import React, { useState } from "react";

import { Table } from "antd";

import "./DataTable.scss";

const DataTable = ({ columns, data, selectedItems, setSelectedItems }) => {
    return (
        <div>
            <Table
                className="content"
                rowSelection={{
                    selectedRowKeys: selectedItems,
                    type: "checkbox",
                    onChange: (selectedRowKeys) => {
                        setSelectedItems(selectedRowKeys);
                    },
                }}
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
