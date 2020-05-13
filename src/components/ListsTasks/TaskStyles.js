import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const TaskStyled = styled.li`
  width: 100%;
  display: inline-block;
  list-style: none;
  padding: 0 0 25px 0;
  margin-bottom: 25px;
  border-bottom: solid 1px #cbcbcb;
  text-decoration: none;
  color: black;

  div {
    display: flex;
    flex-direction: row;

    input {
      margin-right: 25px;
    }
  }
`
