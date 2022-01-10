import styled from "styled-components";

export const Element = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: .5rem 1rem;
  border-radius: .25rem;
  font-size: .9rem;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    border-color: ${props => props.theme.colors.primaryDark};
  }
` 