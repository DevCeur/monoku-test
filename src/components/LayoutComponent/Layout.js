import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LayoutStyled = styled(motion.div)`
  width: 85%;
  margin: 0 auto;
  position: relative;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }

  @media only screen and (min-width: 1024px) {
    width: 55%;
  }

  @media only screen and (min-width: 1280px) {
    width: 50%;
  }

  @media only screen and (min-width: 1910px) {
    width: 45%;
  }
`

export const Layout = ({ children }) => {
  return (
    <LayoutStyled
      initial={{ translateX: -5, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: 5, opacity: 0 }}
    >
      {children}
    </LayoutStyled>
  )
}
