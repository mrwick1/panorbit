import React from 'react';
import { Row, RowName, RowValue } from './DetailsRowStyle';

const DetailsRow = ({ name, value }) => {
  return (
    <Row>
      <RowName>
        <span>{name} &nbsp; : </span>
      </RowName>
      <RowValue>
        <span>{value}</span>
      </RowValue>
    </Row>
  );
};

export default DetailsRow;
