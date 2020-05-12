import styled from 'styled-components'

import heroImage from '../../assets/herobig.jpg'

export const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  margin-top: 25px;
  height: 275px;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 10px;
  box-shadow: 0 10px 13px 0 rgba(147, 163, 247, 0.52);
  overflow: hidden;
  z-index: 9;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      235deg,
      rgba(34, 102, 247, 0.4) 105%,
      #3720b0 25%
    );
  }

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;

    p {
      color: #e8e8e8;
    }

    h2 {
      font-size: 3em;
      font-weight: 200 !important;
      margin-bottom: 85px;

      @media only screen and (min-width: 1024px) {
        margin-bottom: 100px;
      }
    }

    h3 {
      display: block;
      font-weight: 300;
      line-height: 24px;
      width: 65%;

      @media only screen and (min-width: 1024px) {
        font-size: 2em;
        line-height: 1.2em;
        width: 100%;
      }
    }
  }
`
