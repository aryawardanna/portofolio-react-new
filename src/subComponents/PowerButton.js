// Home Button

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PowerBtn } from '../components/AllSvgs';

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: #9145b6;
    box-shadow: 0 0 8px 6px;
  }

  & > *:first-child {
    color: inherit;
  }
`;

export default function PowerButton() {
  return (
    <Power>
      <Link to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </Link>
    </Power>
  );
}
