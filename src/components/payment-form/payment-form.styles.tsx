import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    height: unset;
    margin-top: 100px;
    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    min-width: unset;
  }
`;

export const PaymentButton = styled(CustomButton)`
  margin-left: auto;
  margin-top: 30px;
`;
