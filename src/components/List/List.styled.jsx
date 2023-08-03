import styled from 'styled-components';

export const ContactList = styled.ul`
  width: 320px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactData = styled.span``;

export const ContactDelete = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  height: 20px;
  width: 20px;
  font-size: 10px;
  border-radius: 50%;
  background: #e96c6c;
  color: #fff;
  &:hover,
  &:active {
    background: #e12f2f;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;
