import React from "react";

import { Radio, Divider, Table } from "antd";

import "./DataTable.scss";

const DataTable = ({ columns, data }) => {
    return (
        <div>
            <Table
                rowSelection={{
                    type: "checkbox",
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
