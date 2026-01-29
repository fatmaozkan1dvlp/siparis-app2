import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  const loadOrders = () => {
    fetch("http://localhost:5000/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  };


  const completeOrder = async (id) => {
  await fetch(`http://localhost:5000/api/orders/${id}`, {
    method: "DELETE",
  });

  loadOrders(); // listeyi yenile
};


  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Siparişler</h2>

      {orders.map(order => (
        <div key={order.id} style={styles.card}>
          <h3>{order.title}</h3>
          <p><b>Tür:</b> {order.orderType}</p>
          <p><b>Logo:</b> {order.logo}</p>
          <p><b>Renk:</b> {order.colors}</p>
          <p><b>Not:</b> {order.notes}</p>

          <button
  onClick={() => completeOrder(order.id)}
  style={styles.button}
>
  Tamamlandı
</button>

        </div>
      ))}
    </div>
  );
}
const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    border: "1px solid #eee",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "#444",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Orders;
