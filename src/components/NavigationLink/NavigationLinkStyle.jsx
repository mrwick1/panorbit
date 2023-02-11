import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const NavigationLinkItem = styled.div`
  font-size: 23px;
  font-weight: 500;
  margin: 20px 0px;
  a {
    color: ${colors.white};
    text-decoration: none;
    opacity: 0.6;
  }
  .active-url {
    opacity: 1 !important;
  }
`;
export const Hr = styled.hr`
  border-color: ${colors.white};
  width: 100%;
`;
