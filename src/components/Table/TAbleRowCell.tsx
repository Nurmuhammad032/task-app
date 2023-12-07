import { Box, BoxProps, IconButton, Stack, styled } from "@mui/material";
import { IColumn } from "./types";
import { getValue } from "../../utils/get";
import { Delete, Edit, Visibility } from "@mui/icons-material";

interface Props<T> {
  row: T;
  column: IColumn;
}

const TableCell = styled(Box)<BoxProps>(() => ({
  padding: 12,
  fontSize: 14,
  color: "grey",
}));

function TAbleRowCell<T>({ row, column }: Props<T>) {
  const value = getValue(row as any, column.key);
  console.log(value);

  return (
    <TableCell as="td">
      {value as string}
      {column.key === "action" && (
        <Stack direction={"row"} spacing={1}>
          <IconButton>
            <Visibility color="primary" fontSize="small" />
          </IconButton>
          <IconButton>
            <Edit color="success" fontSize="small" />
          </IconButton>
          <IconButton>
            <Delete color="warning" fontSize="small" />
          </IconButton>
        </Stack>
      )}
    </TableCell>
  );
}

export default TAbleRowCell;
