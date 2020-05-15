import styled, { css } from 'styled-components'

export const Icon = styled.p`
  color: #757575;
  transition: all 0.3s ease;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: #6580ff;
  }
`

export const TextContainer = styled.p`
  cursor: pointer;
  transition: all 0.3s ease;

  ${props =>
    props.complete &&
    css`
      cursor: pointer;
      text-decoration: line-through;
      color: #757575;
    `}
`

export const IconCheck = styled.span`
  display: inline-block;
  margin-right: 15px;
  padding: 2px 3px;
  font-size: 12px;
  text-align: center;
  border-radius: 50%;
  border: solid 2px #27ae60;
  background-color: #2ecc71;
  color: white;

  ${props =>
    props.nochecked &&
    css`
      color: transparent;
      border-color: #757575;
      background-color: transparent;
    `}
`
