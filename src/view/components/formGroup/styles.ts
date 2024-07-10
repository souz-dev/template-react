import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.8rem;
`

export const LabelForm = styled.label`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.6rem;
`

export const ErrorForm = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--red);
  position: absolute;
  bottom: -1.4rem;
`
