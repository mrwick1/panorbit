import styled from 'styled-components';
import { colors, slideIn } from '../../consts/theme';

export const PopUp = styled.div`
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 430px;
  border-radius: 1rem;
  right: 0;
  padding: 2rem 1rem;
  animation: 0.5 linear 1s ${slideIn};
  background-color: ${colors.white};
  z-index: 999;
`;

export const PopUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  height: 110px;
  width: 110px;
  border-radius: 60px;
`;

export const PopUpName = styled.span`
  font-size: 25px;
  color: ${colors['gray-700']};
  margin: 10px 0 0;
`;
export const Email = styled.span`
  color: ${colors['gray-600']};
  font-size: 18px;
  margin-bottom: 1.5rem;
`;

export const ScrollArea = styled.div`
  height: 145px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
  }
`;

export const SignOut = styled.div`
  a {
    border: 1px solid ${colors['red-600']};
    padding: 10px 30px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    background-color: ${colors['red-600']};
    color: ${colors.white};
    transition: all 0.3s ease;
    display: block;
    margin-top: 30px;
    :hover {
      background-color: ${colors.white};
      color: ${colors['red-600']};
    }
  }
`;
