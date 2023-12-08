import {
  Box,
  BoxProps,
  LinearProgress,
  Typography,
  styled,
} from "@mui/material";
import TableHeader from "./TableHeader";
import { TableData } from "./types";
import TableRow from "./TableRow";

interface Props<T> extends TableData<T> {
  isLoading: boolean;
  errorMessage: Error | null;
}

const TableWrapper = styled((props: BoxProps) => (
  <Box component="table" {...props} />
))(() => ({
  borderCollapse: "collapse",
  border: "none",
  width: "100%",
}));

function Table<T extends object>({
  rows,
  columns,
  isLoading,
  errorMessage,
  render,
}: Props<T>) {
  return (
    <Box sx={{ position: "relative" }}>
      {isLoading && (
        <LinearProgress
          sx={{ width: "100%", position: "absolute", top: "2.7rem", left: 0 }}
        />
      )}
      <TableWrapper>
        <thead>
          <TableHeader columns={columns} />
        </thead>
        {!isLoading && (
          <tbody>
            {rows.length ? (
              <TableRow rows={rows} columns={columns} render={render} />
            ) : (
              <tr>
                <td style={{ paddingTop: "1rem" }}>No data</td>
              </tr>
            )}
          </tbody>
        )}
      </TableWrapper>
      {errorMessage && (
        <Typography color={"red"}>{errorMessage.message}</Typography>
      )}
    </Box>
  );
}

export default Table;
