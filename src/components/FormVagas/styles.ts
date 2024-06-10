import styled from 'styled-components'
import Cores from '../../cores'

export const FormEstilo = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const BtnPesquisar = styled.button`
  background-color: ${Cores.corPrincipal};
  border: 1px solid ${Cores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Cores.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const InputStyle = styled.input`
  padding: 0 16px;
  outline-color: ${Cores.corPrincipal};
`
