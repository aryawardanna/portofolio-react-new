import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled(Link)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`;

export default function BlogComponent() {
  return <Box to="/">Blog item</Box>;
}
