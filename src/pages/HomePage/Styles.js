import styled from "styled-components";

export const PageContainer = styled.main`
  padding: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 50em;
  height: 8em;
  background-color: #FFFFFF;
  border-radius: 20px;
`

export const Input = styled.input`
  margin-left: 10px;
  color: #FFFFFF;
  width: 30rem;
  height: 2em;
  border-radius: 10px;
  background-color: #000000;
  font-family: 'VT323', monospace;
  font-size: 20px;
  padding: 5px;
  cursor: ${props => props.cursor}
`

export const ButtonsContainer = styled.div`
  margin-top: 1em;
  gap: 1em;
  display: flex;
`

export const Button = styled.button`
  height: 3em;
  width: 10em;
  border: none;
  border-radius: 10px;
  font-family: 'VT323', monospace;
  font-size: 1em;
  cursor: pointer;
  background: #FFFFFF;
`

export const CreateButton = styled.button`
  color: #FFFFFF;
  height: 3em;
  width: 8em;
  border: none;
  border-radius: 10px;
  font-family: 'VT323', monospace;
  font-size: 1em;
  cursor: pointer;
  background: #000000;
`