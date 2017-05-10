import React from 'react';
import {
  Grid as FlexGrid,
  Row as FlexRow,
  Col as FlexCol
} from 'react-flexbox-grid';

export const Grid = ({ children }) => (
  <FlexGrid fluid style={{ padding: 0 }}>{children}</FlexGrid>
);
export const Row = FlexRow;
export const Col = FlexCol;
