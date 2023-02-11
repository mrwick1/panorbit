// color used in  the  app

import { keyframes } from 'styled-components';

export const colors = {
  'gray-100': '#6d6d6d45',
  'gray-200': '#F6F6F6',
  'gray-300': '#e2e2e2',
  'gray-400': '#D5D5D5',
  'gray-500': '#9A9A9A',
  'gray-600': '#6D6D6D',
  'gray-700': '#4A4A4A',
  'blue-500': '#3A59C8',
  'blue-600': '#474EC8',
  white: '#fff',
  'red-600': '#D55151',
  'green-600': '#1EAA5B',
};

// keyframes

export const slideIn = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0px); }
`;
