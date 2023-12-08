import { Box, BoxProps, styled } from "@mui/material";
import { IColumn, Render } from "./types";
import { getValue } from "../../utils/get";

interface Props<T> {
  row: T;
  column: IColumn;
  render?: Render<T>;
}

const TableCell = styled(Box)<BoxProps>(() => ({
  padding: 12,
  fontSize: 14,
  color: "grey",
}));

function TAbleRowCell<T extends object>({ row, column, render }: Props<T>) {
  const value = getValue<T, string>(row, column.key);

  return (
    <TableCell as="td">
      {render && render[column.key] ? render[column.key](row) : value}
    </TableCell>
  );
}

export default TAbleRowCell;
