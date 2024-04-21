import styled from "styled-components";
// import { NavLink } from "react-router-dom";


export const Subscriptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 30px 0;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 80%;
    display: flex;
    justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px; /* Расстояние между колонками */
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Расстояние между чекбоксами */
`;

export const CheckboxLabel = styled.label`
  margin-left: 5px; /* Расстояние между чекбоксом и текстом */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Делаем обертку кнопок шириной 100% */
`;
