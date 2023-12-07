import { Box, BoxProps, styled } from "@mui/material";
import TableHeader from "./TableHeader";
import { IColumn, IRows, TableData } from "./types";
import { FC } from "react";
import TableRow from "./TableRow";

const TableWrapper = styled((props: BoxProps) => (
  <Box component="table" {...props} />
))(() => ({
  borderCollapse: "collapse",
  border: "none",
  width: "100%",
}));

function Table<T>({ rows, columns }: TableData<T>) {
  return (
    <TableWrapper>
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody>
        <TableRow rows={rows} columns={columns} />
      </tbody>
    </TableWrapper>
  );
}

export default Table;
