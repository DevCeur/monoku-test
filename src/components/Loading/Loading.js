import React from 'react'
import styled, { keyframes } from 'styled-components'

const AnimationLoading = keyframes`
  0% {
    opacity: 0;
    top: 0px;
  }

  25% {
    top: -2px;
  }

  50% {
    opacity: 1;
    top: 0;
  }

  75% {
    top: 2px;    
  }

  100% {
    opacity: 0;
    top: 0px;
  }
`

const LoadingAnimated = styled.div`
  width: 40px;
  height: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  margin: 25px auto;

  div {
    position: relative;
    background-color: #575757;
    border-radius: 50%;
    opacity: 0;

    :nth-child(1) {
      animation: ${AnimationLoading} 0.8s ease infinite;
    }

    :nth-child(2) {
      animation: ${AnimationLoading} 0.8s 0.25s ease infinite;
    }

    :nth-child(3) {
      animation: ${AnimationLoading} 0.8s 0.5s ease infinite;
    }
  }
`

export const Loading = ({ marginTop }) => {
  return (
    <LoadingAnimated style={{ marginTop: marginTop }}>
      <div />
      <div />
      <div />
    </LoadingAnimated>
  )
}
