import styled from 'styled-components'

export const ContainerView = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.5em;
    text-align: center;
    line-height: 1.6em;
  }

  p {
    text-align: center;
    line-height: 24px;
    margin: 15px 0;
  }

  a {
    display: block;
    padding: 10px 25px;
    border-radius: 3px;
    box-shadow: 0 7px 10px -4px rgba(53, 59, 155, 0.51);
    background-image: linear-gradient(40deg, #6f70d7 18%, #81caff 107%);
    color: white;
    border: none;
    text-decoration: none;
  }
`
