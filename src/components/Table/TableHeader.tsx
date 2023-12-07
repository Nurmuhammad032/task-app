import { Box, BoxProps, styled } from "@mui/material";
import { IColumn } from "./types";

interface Props {
  columns: IColumn[];
}

const TableHeaderCell = styled(Box)<BoxProps>(({ theme }) => ({
  padding: 12,
  fontWeight: 500,
  textAlign: "left",
  fontSize: 14,
  borderBottom: "1px solid #000",
  color: theme.palette.grey[700],
}));

const TableHeader = ({ columns }: Props) => {
  return (
    <tr>
      {columns.map((column, i) => (
        <TableHeaderCell as="th" key={i} sx={{ width: column.width }}>
          {column.title}
        </TableHeaderCell>
      ))}
    </tr>
  );
};

export default TableHeader;
