import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalDiv = styled.div`  
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-weight: 700;
  color: #6a5a5a;
  background-color: transparent;

  width: 30px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
 
`;