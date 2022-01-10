import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
  padding: 1rem;
  border-radius: .5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.white};
  transition: all ease .3s;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`

export const Title = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.white};
  font-weight: 800;
`