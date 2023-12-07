import { Table } from "../../components";
import { SectionTitle } from "../../components/StyledComponents";

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
    title: "Actions",
    width: 100,
    key: "action",
  },
];

const rows = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: "1 Light",
  },
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: "2 Light",
  },
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: "3 Light",
  },
];
const Index = () => {
  return (
    <section>
      <div>
        <SectionTitle>Order</SectionTitle>
        <Table rows={rows} columns={header} />
      </div>
    </section>
  );
};

export default Index;
