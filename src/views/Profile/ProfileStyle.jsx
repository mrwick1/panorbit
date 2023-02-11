import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const Layout = styled.div`
  display: flex;
  padding: 2rem;
  position: relative;
`;

export const RightSection = styled.div`
  padding-left: 2rem;
  width: 100%;
`;
export const ProfileText = styled.h1`
  color: ${colors['gray-600']};
  font-weight: 500;
`;

export const ImageDiv = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  align-items: center;
`;
