import styled from 'styled-components';
import { colors, slideIn } from '../../consts/theme';

export const UserChatBox = styled.div`
  border: 1px solid ${colors['blue-600']};
  position: absolute;
  background-color: ${colors.white};
  right: 28rem;
  bottom: 0;
  width: 350px;
  border-radius: 10px 10px 0 0;
  transition: all 0.3s ease;
  animation: 0.5 linear 1s ${slideIn};
  overflow-y: hidden;
  height: ${(props) => (props.isChatMinimized ? '62px' : '400px')};
`;

export const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 40px;
`;
export const FlexL = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
`;

export const Name = styled.span`
  color: ${colors.white};
`;
const isRotate = 'rotate(180deg)';
export const Button = styled.img`
  cursor: pointer;
  transform: ${(props) => (JSON.parse(props.rotate) ? isRotate : '')};
`;

export const ChatArea = styled.div`
  height: 300px;
  overflow-y: scroll;
  padding: 10px 15px;
`;

export const Send = styled.div`
  position: relative;
  height: 40px;
  border: 1px solid ${colors['gray-400']};
  input {
    width: 100%;
    height: 100%;
    padding: 0 3rem 0 1rem;
    font-size: 18px;
    outline: none;
  }
  img {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
