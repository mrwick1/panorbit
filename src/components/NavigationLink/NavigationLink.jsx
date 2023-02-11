import React from 'react';
import { Link } from 'react-router-dom';
import { Hr, NavigationLinkItem } from './NavigationLinkStyle';

const NavigationLink = ({ text, last, to, classname }) => {
  return (
    <NavigationLinkItem>
      <Link className={classname} to={to}>
        {text}
      </Link>
      {!last && <Hr />}
    </NavigationLinkItem>
  );
};

export default NavigationLink;
