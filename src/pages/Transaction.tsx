import { Column } from "react-table";
import AdminSideBar from "../components/AdminSideBar"
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";


interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Ahmad Ali",
  amount: 250,
  discount: 20,
  quantity: 3,
  status: <span className="red">Proccessing</span>,
  action: <Link to="/admin/transaction/onjyuvt">Manage</Link>
  },
  {
    user: "Haider Ali",
  amount: 555,
  discount: 50,
  quantity: 5,
  status: <span className="green">Shipped</span>,
  action: <Link to="/admin/transaction/dtgytgtrhj">Manage</Link>
  },
  {
    user: "Hassan Ali",
  amount: 645,
  discount: 70,
  quantity: 8,
  status: <span className="purple">Delivered</span>,
  action: <Link to="/admin/transaction/njhuggyv">Manage</Link>
  },
];
const Transaction = () => {

  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    ),
    []
  );
  return (
    <div className="admin-container">
      <AdminSideBar />
      <main>{Table()}</main>
    </div>
  )
}

export default Transaction