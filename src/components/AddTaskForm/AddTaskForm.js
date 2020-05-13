import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Form = styled.form`
  position: relative;
  margin-bottom: 50px;
`

export const Input = styled(motion.input)`
  width: 100%;
  display: block;
  padding: 20px;
  background-color: #f6f6f6;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  margin: 25px 0 15px 0;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;
  border: solid 1px transparent;

  :focus {
    color: #3d3e9e !important;
    border: solid 1px #3d3e9e;
  }

  ${props =>
    props.submit &&
    css`
      display: block;
      width: 137px;
      height: 40px;
      border-radius: 3px;
      box-shadow: 0 7px 10px -4px rgba(53, 59, 155, 0.51);
      background-image: linear-gradient(40deg, #6f70d7 18%, #81caff 107%);
      margin: 0;
      padding: 0;
      color: white;
      border: none;

      :focus {
        border: none;
      }

      position: absolute;
      right: 0;
      cursor: pointer;
    `}
`
