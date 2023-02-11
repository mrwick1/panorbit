import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const Navigation = styled.div`
  border-radius: 1rem;
  background-color: ${colors['blue-500']};
  padding: 2rem;
  min-width: 240px;
  display: flex;
  align-items: center;
  height: ${'calc(100vh - 4rem)'};
  > div {
    width: 100%;
  }
`;
