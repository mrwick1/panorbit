import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 10px 1rem;
  cursor: pointer;
`;

export const ChatAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
`;

export const Dot = styled.div`
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.choice ? colors['green-600'] : colors['gray-400']};
`;
