import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  border: none;
  background-color: #9147a5;
  color: #f9f9f9;
  cursor: pointer;
  user-select: none;

  width: 100%;

  &:hover {
    background-color: #853c9a;
    transition-duration: 0.35s;
  }

  &:active {
    transform: scale(0.95);
    background-color: #753287;
    transition-duration: 0.35s;
  }
`