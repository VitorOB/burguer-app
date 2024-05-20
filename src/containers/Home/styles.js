import styled from "styled-components";

 import Background from "../../assets/burguer-fundo.jpg"

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  /* border: 1px solid blue; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Image = styled.img`
  margin: 10px 50px;
  width: 300px;
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
  border: 2px solid #FFA62F;
  margin-bottom: 34px;
  font-family: "Nunito", sans-serif;
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 100px;
    background-color: #FCB740;
    border-radius: 20px;
    border: 2px solid #d93856;
`
