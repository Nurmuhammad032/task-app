import { ReactNode } from "react";

export interface IColumn {
  title: string;
  key: string;
  width: number;
}

export type Render<T> = Record<string, (row: T) => React.ReactNode>;

export interface TableData<T> {
  rows: T[];
  columns: IColumn[];
  render?: Render<T>;
}
