import styled from "styled-components";

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