import { Box, BoxProps, styled } from "@mui/material";
import { TableData } from "./types";
import TAbleRowCell from "./TAbleRowCell";

const TableRowItem = styled(Box)<BoxProps>(({ theme }) => ({
  cursor: "auto",
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.grey[200],
  },
  transition: "background-color 0.1s",
}));

function TableRow<T>({ rows, columns }: TableData<T>) {
  return (
    <>
      {rows.map((row, i) => (
        <TableRowItem as="tr" key={`row-item-${i}`}>
          {columns.map((column, i) => (
            <TAbleRowCell key={`row-cell-${i}`} row={row} column={column} />
          ))}
        </TableRowItem>
      ))}
    </>
  );
}

export default TableRow;
