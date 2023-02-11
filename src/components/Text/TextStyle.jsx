import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const Time = styled.span`
  display: block;
  text-align: center;
  color: ${colors['gray-600']};
  font-size: 14px;
  margin: 8px;
`;

export const ReceivedMessage = styled.div`
  width: 100%;
  span {
    background-color: ${colors['gray-300']};
    padding: 10px 15px;
    border-radius: 4px;
    display: block;
    width: fit-content;
    margin-bottom: 14px;
  }
`;

export const SendMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  span {
    background-color: ${colors['gray-300']};
    padding: 10px 15px;
    border-radius: 4px;
    display: block;
    width: fit-content;
    margin-bottom: 14px;
  }
`;
