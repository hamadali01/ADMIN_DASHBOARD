import { useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDBBMHxzZWFyY2h8Mnx8c2hvZXNBZW58MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdsasssss",
    quantity: 1,
    price: 522,
  },
];
const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Hassan Khan",
    address: "77 Black Street",
    city: "Lahore",
    state: "Punjab",
    country: "Pakistan",
    pinCode: 325525,
    orderItems,
    subtotal: 522,
    discount: 52,
    shippingCharges: 0,
    tax: 20,
    totalAmount: 522 + 20 + 0 - 52,
    status: "Proccessing",
    _id: "jbhvfgxdx",
  });

  const {
    name,
    address,
    city,
    state,
    country,
    pinCode,
    subtotal,
    discount,
    shippingCharges,
    tax,
    totalAmount,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Proccessing" ? "Shipped" : "Delivered"
    }))
  }
  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="new-product">
        <section style={{
          padding: "2rem"
        }}>
          <h2>Order Items</h2>
          {order.orderItems.map((orderItem) => (
            <ProductCard
              name={orderItem.name}
              photo={orderItem.photo}
              price={orderItem.price}
              quantity={orderItem.quantity}
              _id={orderItem._id}
            />
          ))}
        </section>

        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {totalAmount}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Proccess Order</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${quantity * price}
    </span>
  </div>
);

export default TransactionManagement;
