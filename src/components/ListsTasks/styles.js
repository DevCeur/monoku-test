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
