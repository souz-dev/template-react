import styled from 'styled-components'

export interface InputStylesTypes {
  fullWidth?: boolean
  readOnly?: boolean
}

export const Container = styled.div<InputStylesTypes>`
  min-width: 10rem;
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};

  span {
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;
  }
`

export const InputContent = styled.div<InputStylesTypes>`
  width: 100%;
  height: 4rem;
  background: ${({ readOnly }) =>
    readOnly ? 'var(--neutral)' : 'var(--white)'};
  border: 0.1rem solid var(--neutral-400);
  border-radius: 0.4rem;
  padding: 1rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  input {
    max-width: 100%;
    flex: 1;
    height: 100%;
    border: none;
    background: none;
    outline: none;
    color: var(--text);
  }

  svg:hover {
    cursor: pointer;
  }
`

export const AddonContent = styled.div`
  height: 4rem;
  padding: 0.8rem 1.2rem;
  margin-right: -1.4rem;
  font-size: 1.4rem;
  line-height: 2rem;
  background-color: var(--neutral);
  border: 0.1rem solid var(--neutral-400);
  border-radius: 0 0.4rem 0.4rem 0;
`
