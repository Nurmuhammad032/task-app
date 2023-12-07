export interface IColumn {
  title: string;
  key: string;
  width: number;
}

export interface IRows {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
}

export interface TableData<T> {
  rows: T[];
  columns: IColumn[];
}
