import styled from 'styled-components'

export const Container = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.2rem;
  border: 0.2rem solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: rotating 1s infinite;

  @keyframes rotating {
    to {
      transform: rotate(1turn);
    }
  }
`
