

export type OrderItemType ={
    name: string;
    photo: string;
    price: number;
    quantity: number;
    _id: string;
};

export type OrderType ={
    name: string;
    address: string;
    city: string;
    country: string;
    state: string;
    pinCode: number;
    status: "Proccessing"|"Shipped"|"Delivered";
    subtotal: number;
    discount: number;
    shippingCharges: number;
    tax: number;
    totalAmount: number;
    orderItems: OrderItemType[];
    _id: string;
};