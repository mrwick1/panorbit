import styled from 'styled-components';
import { colors } from '../../../consts/theme';

export const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  gap: 10px;
`;

export const RowName = styled.span`
  width: 150px;
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  span {
    font-size: 24px;
    flex-shrink: 0;
    font-weight: 500;
    color: ${colors['gray-500']};
  }
`;

export const RowValue = styled.span`
  width: 300px;
  word-break: break-all;
  span {
    font-size: 24px;
    font-weight: 500;
    color: ${colors['gray-700']};
  }
`;
