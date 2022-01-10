import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 8rem 2rem;
  margin: 0 auto;
  max-width: 900px;
`

export const Header = styled.header`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, .05);
  text-align: center;
  padding: 2rem;
  border-radius: .5rem;
  margin-bottom: 2rem;

  & > h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
  }
  
  & > p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.black};
  }
`

export const Actions = styled.footer`
  display: flex;
  justify-content: flex-end;
`

export const Label = styled.label`
  font-size: 1rem;
  color: ${props => props.theme.colors.black};
  margin-bottom: .5rem;
  display: block;
`

export const InputField = styled.input`
  display: block;
  padding: .5rem 1rem;
  border: none;
  border-radius: .25rem;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, .05);
  margin-bottom: 1rem;
` 