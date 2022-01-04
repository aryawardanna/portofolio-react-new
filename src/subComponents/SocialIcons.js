import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  YouTube,
} from '../components/AllSvgs';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

export default function SocialIcons() {
  return (
    <Icons>
      <div className="">
        <Link
          to={{ pathname: 'https://github.com/aryawardanna' }}
          style={{ color: 'inherit' }}
          target="_blank"
        >
          <Github width={25} height={25} fill="currentColor" />
        </Link>
      </div>
      <div className="">
        <Link
          to={{ pathname: 'https://twitter.com/aryawardanna1' }}
          style={{ color: 'inherit' }}
          target="_blank"
        >
          <Twitter width={25} height={25} fill="currentColor" />
        </Link>
      </div>
      <div className="">
        <Link
          to={{ pathname: 'https://www.facebook.com/aryawardanna/' }}
          style={{ color: 'inherit' }}
          target="_blank"
        >
          <Facebook width={25} height={25} fill="currentColor" />
        </Link>
      </div>
      <div className="">
        <Link
          to={{ pathname: 'https://www.instagram.com/aryawardanna/' }}
          style={{ color: 'inherit' }}
          target="_blank"
        >
          <Instagram width={25} height={25} fill="currentColor" />
        </Link>
      </div>
      <div className="">
        <Link
          to={{ pathname: '#' }}
          style={{ color: 'inherit' }}
          target="_blank"
        >
          <YouTube width={25} height={25} fill="currentColor" />
        </Link>
      </div>
      <Line />
    </Icons>
  );
}