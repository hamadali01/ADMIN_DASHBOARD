import { ReactElement, useCallback, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDBBMHxzZWFyY2h8Mnx8c2hvZXNBZW58MHx8&w=1000&q=804";
const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: DataType[] = [
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
    price: 790,
    stock: 12,
    action: <Link to={"/admin/product/saknjfb"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 250000,
    stock: 25,
    action: <Link to={"/admin/product/kknjbhvg"}>Manage</Link>,
  },
];
const Product = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Products",
      true
    ),
    []
  );
  return (
    <div className="admin-container">
      <AdminSideBar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Product;
