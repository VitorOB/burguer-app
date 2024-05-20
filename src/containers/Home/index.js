import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../assets/burguer-logo.png";

import axios from "axios";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
  /*H3,*/
  Image,
  InputLabel,
  Input,
  ContainerInputs,
} from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  // const [feedbackMessage, setFeedbackMessage] = useState('');

  const inputPedido = useRef();
  const inputClientName = useRef();

  // function notify(){
  //   toast.success("Pedido enviado")
  // }

  async function addNewOrder() {
    // Verifica se os campos estão vazios
    if (!inputPedido.current.value || !inputClientName.current.value) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const { data: novoPedido } = await axios.post(
        "http://localhost:3001/order",
        {
          order: inputPedido.current.value,
          clientName: inputClientName.current.value,
        }
      );

      console.log(novoPedido);

      setOrders([...orders, novoPedido]);
      navigate("/orders");
      // setFeedbackMessage('Pedido adicionado com sucesso!');
    } catch (error) {
      console.error("Erro ao adicionar novo pedido:", error);
      alert(
        "Ocorreu um erro ao adicionar o novo pedido. Por favor, tente novamente."
      );
    }
  }

  return (
    <Container>
      <ContainerInputs>
        <Image src={Logo} />
        <ContainerItens>
          <H1>Faça seu pedido!</H1>
          {/* <H3>Onde cada mordida é uma explosão de sabor: Satisfação em cada hambúrguer!</H3> */}

          <InputLabel>Pedido</InputLabel>
          <Input ref={inputPedido} placeholder="1 Coca-Cola, 1-X Salada" />

          <InputLabel>Nome do Cliente</InputLabel>
          <Input ref={inputClientName} placeholder="Steve Jobs" />

          <Button onClick={addNewOrder}>Novo Pedido</Button>
          {/* <ToastContainer /> */}
          {/* <{feedbackMessage && <p>{feedbackMessage}</p>}/> */}
        </ContainerItens>
      </ContainerInputs>
    </Container>
  );
};

export default App;
