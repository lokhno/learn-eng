import React, { useState } from "react";

import { Radio, Divider, Table } from "antd";

import "./DataTable.scss";

const DataTable = ({ columns, data }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    return (
        <div>
            <Table
                rowSelection={{
                    type: "checkbox",
                    onChange: (selectedRowKeys) => {
                        setSelectedItems(selectedRowKeys);
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
