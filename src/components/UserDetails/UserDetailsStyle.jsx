import styled from 'styled-components';
import { colors, slideIn } from '../../consts/theme';

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  height: calc(100% - 4rem);
`;

export const Seperator = styled.div`
  height: 80%;
  width: 1px;
  background-color: ${colors['gray-600']};
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  align-items: center;
  animation: 0.5 linear 1s ${slideIn};
  opacity: 1;
`;

export const Name = styled.span`
  font-size: 25px;
  display: block;
  margin: 1rem 0;
  font-weight: 500;
  color: ${colors['gray-700']};
`;

export const MasterPhoto = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 120px;
`;

export const Hr1 = styled.div`
  height: 1px;
  width: 70%;
  display: block;
  margin: 1rem auto;
  background-color: ${colors['gray-500']};
`;

export const Title = styled.span`
  font-size: 23px;
  color: ${colors['gray-500']};
  margin-bottom: 1rem;
`;

export const AddressSec = styled.div`
  margin: 1rem 0;
`;
export const LocationSection = styled.div`
  animation: 0.9 linear 1s ${slideIn};
  padding: 1rem 3rem;
  opacity: 1;
`;

export const MapContainer = styled.div`
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin: 3rem 0 1rem 2rem;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
  }
  span {
    position: absolute;
    left: 2rem;
    top: 1rem;
  }
`;

export const LatAndLong = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Desc = styled.span`
  font-size: 18px;
  color: ${colors['gray-500']};
`;
export const Value = styled.span`
  font-size: 18px;
  color: ${colors['gray-700']};
`;
