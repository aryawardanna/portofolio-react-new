import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico', cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

export default function LogoComponent(props) {
  return <Logo color={props.theme}>ARYA W</Logo>;
}
