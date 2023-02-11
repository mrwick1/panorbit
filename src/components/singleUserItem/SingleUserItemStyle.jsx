import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const ListItem = styled.div`
  display: flex;
  padding: 15px;
  gap: 15px;
  align-items: center;
`;
export const Name = styled.span`
  color: ${colors['gray-600']};
  font-size: 18px;
  pointer-events: none;
`;

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 60px;
`;

export const Item = styled.div`
  background-color: ${colors.white};
  padding: 0 30px;
`;

export const Hr = styled.hr`
  border-color: ${colors['gray-100']};
  margin: auto;
  width: 95%;
`;
