import styled from "styled-components";

// import Background from "./assets/logo1.svg"

export const Container = styled.div`
  /* background: #000;
  background-size: cover; */
  /* border: 1px solid blue; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  /* border: 2px solid red; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

// export const H3 = styled.h3`
//   text-align: center;
//   font-size: 18px;
//   font-weight: 700;
//   margin-bottom: 20px;
//   display: flex;
//   font-family: "Nunito", sans-serif;
//   flex-wrap: nowrap;
// `;

export const InputLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
  margin-left: 20px;
`;

export const Input = styled.input`
  display: flex;
  padding: 19px 139px 18px 15px;
  align-items: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  outline: none;
  margin-bottom: 34px;
  font-family: "Nunito", sans-serif;
`;

export const Button = styled.button`
  display: flex;
  width: 342px;
  height: 68px;
  padding: 0px 113px;
  justify-content: center;
  align-items: center;
  background: #d93856;
  border-radius: 20px;

  color: #fff;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 17px;
  font-weight: 900;
  line-height: 2.5px; /* 14.706% */

  cursor: pointer;
  border: none;

  &:hover {
    background: #dd8854;
  }
`;

export const Order = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 342px;
  height: 68px;
  /* background: #dd8854; */
  margin-top: 20px;
  border: 2px solid blue;
  color: #000;

  p {
    font-family: "Nunito", sans-serif;
    font-size: 17px;
    font-weight: 900;
    line-height: 2.5px; /* 14.706% */
  }

  button{
    background: none;
    border: none;
    cursor: pointer;
  }
`;
