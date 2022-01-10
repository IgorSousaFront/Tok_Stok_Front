import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .8);
  z-index: 998;
`

export const ModalWrapper = styled.div`
  max-width: 100%;
  width: 750px;
  background-color: ${props => props.theme.colors.light};
  box-shadow: 0 4px 10px RGBA(0, 152, 69, .25);
  padding: 2rem;
  border-radius: .5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 999;
`

export const ModalTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`