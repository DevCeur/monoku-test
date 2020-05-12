import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TasksDashStyled = styled(motion.div)`
  width: 100%;
  margin: 50px auto;
  position: relative;

  h2 {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;

    @media only screen and (min-width: 1024px) {
      text-align: start;
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 80%;
  }
`
