import React from "react"
import { TableData } from "../../shared/types";
import Table from "../table";
import { mockAvailableTables } from "../../shared/constants";
import styles from './styles.module.scss';
import { List } from "@mui/material";

const TableList = () => {
    const availableTables: TableData[] = mockAvailableTables; // useSelector(selectAvailableTables)

    return (
        <div className={styles.root}>
            <List style={{maxHeight: '100%', overflow: 'auto'}}>
                {availableTables.map((table, id) => (
                    <Table key={id} info={table} />
                ))}
            </List>
        </div>
    )
};

export default TableList;
