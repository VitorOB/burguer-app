import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo2.svg";
import Trash from "../../assets/trash.svg";

import axios from "axios";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, Order } from "./styles";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const { data: todosPedidos } = await axios.get(
        "http://localhost:3001/order"
      );
      setOrders(todosPedidos);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    const newOrders = orders.filter((order) => order.id !== orderId);

    await axios.delete(`http://localhost:3001/order/${orderId}`);

    setOrders(newOrders);
  }

  function voltarPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image src={Logo} />
      <ContainerItens>
        <H1>Pedidos!</H1>
        <Button onClick={voltarPage}>Voltar</Button>
        <u>
          {orders.map((order) => (
            <Order key={order.id}>
              <p>Pedido: {order.order}</p>
              <p>Cliente: {order.clientName}</p>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="lata de lixo" />
              </button>
            </Order>
          ))}
        </u>
      </ContainerItens>
    </Container>
  );
};

export default Orders;
