// OrderList.tsx
import React, { useEffect, useState } from 'react';
import Api from '../../utility/initApi';
import msgErorr from '../../utility/Notifaction/Erorr';

interface Product {
  idProduct: string;
  name: string;
  count: string;
  state: number;
}

interface Order {
  _id: string;
  idSupermarket: string;
  idDriver: string;
  products: Product[];
}

interface OrderListProps {
  orders: Order[];
}

function CurrentOrderDash() {
  let [orders, setorders] = useState<Order[]>([]);

  async function GetAllOrder() {
    try {
      const res = await Api.get('/ceo/getallorder');
      if (res.status === 200) {
        console.log(res.data);
        setorders(res.data);
      }
    } catch (e: any) {
      msgErorr(e);
    }
  }

  useEffect(() => {
    GetAllOrder();
  }, []);

  return (
    <div className="p-4 text-blue-600">
      <header className="mb-4">
        <h1 className="text-2xl font-bold"> State of All Orders </h1>
      </header>
      <div className="space-y-4">
        {orders.map((order: Order) => (
          <div key={order._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
            <p>Supermarket ID: {order.idSupermarket}</p>
            <p>Driver ID: {order.idDriver}</p>
            <h3 className="font-semibold">Products:</h3>
            <ul className="list-disc list-inside">
              {order.products.map((product) => (
                <li key={product.idProduct}>
                  {product.name} - Count: {product.count} - State: {product.state}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrderDash;
