import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const HomeSection = styled.section`
  padding: 4rem;
  padding-top: 8rem;
`;

export const UserListCard = styled.div`
  padding-top: 1.5rem;
  border-radius: 1rem;
  background-color: ${colors['gray-200']};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 700px;
  margin: auto;
`;

export const SelectText = styled.h4`
  color: ${colors['gray-600']};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 2rem;
`;
export const ScrollableArea = styled.div`
  height: 500px;
  overflow-y: scroll;
  border-radius: 1rem;
  a {
    text-decoration: none;
  }
`;
