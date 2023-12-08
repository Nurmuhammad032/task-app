import { useQuery } from "@tanstack/react-query";
import { Table } from "../../components";
import { SectionTitle } from "../../components/StyledComponents";
import { apiFetch } from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IOrder } from "../../types/order";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOrderData } from "../../slices/orderSlice";

interface IRow {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  website: string;
  phone: string;
}

const header = [
  {
    title: "Name",
    key: "name",
    width: 100,
  },
  {
    title: "Username",
    width: 100,
    key: "username",
  },
  {
    title: "Email",
    width: 100,
    key: "email",
  },
  {
    title: "Address",
    width: 100,
    key: "address",
  },
  {
    title: "Website",
    width: 100,
    key: "website",
  },
  {
    title: "Phone number",
    width: 100,
    key: "phone",
  },
  {
    title: "Actions",
    width: 100,
    key: "action",
  },
];

const Index = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<IRow[] | null>(null);

  // But we get users)
  const getOrders = async () => {
    try {
      const res = await apiFetch<IOrder[]>("/users");
      const orders = res.data;
      const convertToRow = orders.map(
        (order): IRow => ({
          id: order.id,
          name: order.name,
          username: order.username,
          email: order.email,
          address: order.address.city,
          website: order.website,
          phone: order.phone,
        })
      );
      return convertToRow;
    } catch (error) {
      toast.error((error as AxiosError).message);
    }
  };

  const {
    data: orderRows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["order"],
    queryFn: getOrders,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    const searchValue = orderRows!.filter((order) => {
      return order.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    if (searchValue.length || value) {
      setSearch(searchValue);
    } else {
      setSearch(null);
    }
  };

  const handleDelete = () => {
    const permission = window.confirm("Are you sure?");

    if (permission) {
      setTimeout(() => {
        toast.error("No api!");
      }, 1000);
    }
  };

  return (
    <section>
      <div>
        <SectionTitle>Order</SectionTitle>
        <Stack direction="row" justifyContent="end" mb={4}>
          <Stack
            sx={{ maxWidth: "40rem", width: "100%" }}
            spacing={2}
            direction="row"
            justifyContent="end"
          >
            <TextField
              label="Search"
              size="small"
              placeholder="Search by name.."
              disabled={!orderRows}
              onChange={handleSearch}
            />
            <Link to={"create"}>
              <Button variant="contained" sx={{ width: "10rem" }}>
                Add
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Table
          rows={search || orderRows!}
          columns={header}
          isLoading={isLoading}
          errorMessage={error}
          render={{
            action: (row) => (
              <>
                <Stack direction={"row"}>
                  <Link to={`${row.id}`}>
                    <IconButton>
                      <Visibility color="primary" fontSize="small" />
                    </IconButton>
                  </Link>
                  <Link
                    to="edit"
                    onClick={() => {
                      dispatch(
                        setOrderData({
                          name: row.name,
                          email: row.email,
                          username: row.username,
                          website: row.website,
                        })
                      );
                    }}
                  >
                    <IconButton>
                      <Edit color="success" fontSize="small" />
                    </IconButton>
                  </Link>
                  <IconButton onClick={handleDelete}>
                    <Delete color="warning" fontSize="small" />
                  </IconButton>
                </Stack>
              </>
            ),
          }}
        />
      </div>
    </section>
  );
};

export default Index;
