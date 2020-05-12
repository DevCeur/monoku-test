import styled from 'styled-components'

export const TaskStyled = styled.li`
  list-style: none;
  padding: 0 0 25px 0;
  margin-bottom: 25px;
  border-bottom: solid 1px #cbcbcb;

  div {
    display: flex;
    flex-direction: row;

    input {
      margin-right: 25px;
    }
  }
`
