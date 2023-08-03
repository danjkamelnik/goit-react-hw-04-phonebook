import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  margin: 0 auto;
  width: 400px;
`;

export const Label = styled.label`
  padding-left: 40px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 300px;
  margin-bottom: 30px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #000;
  text-align: center;
  font=size: 26px;
  transition: all 250ms ease;

  &:focus {
    outline: none;
    border-bottom: 1px solid #2196f3;
  }

  &::placeholder {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin-left: 265px;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 100px;
  background: #2196f3;
  color: #fff;
  &:hover,
  &:active {
    background: #39a1f4;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;
