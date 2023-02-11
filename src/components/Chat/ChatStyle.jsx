import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const ChatBox = styled.div`
  border: 1px solid ${colors['blue-600']};
  position: absolute;
  right: 2rem;
  bottom: 0;
  width: 350px;
  background-color: ${colors.white};
  border-radius: 10px 10px 0 0;
`;

export const ChatHeader = styled.div`
  display: flex;
  background-color: ${colors['blue-600']};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
`;
export const ChatFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const isRotate = 'rotate(180deg)';
export const Arrow = styled.img`
  transition: all 0.3s ease;
  transform: ${(props) => (JSON.parse(props.rotate) ? '' : isRotate)};
`;

export const ChatScroll = styled.div`
  transition: all 0.3s ease-out;
  height: ${(props) => (JSON.parse(props.isOpen) ? '400px' : '0')};
  overflow-y: scroll;
`;
