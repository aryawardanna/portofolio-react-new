import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';
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
  height: 3rem;
  background-color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`;

export default function SocialIcons(props) {
  return (
    <Icons>
      <div className="">
        <a
          href="https://github.com/aryawardanna"
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div className="">
        <a
          href="https://twitter.com/aryawardanna1"
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div className="">
        <a
          href="https://www.facebook.com/aryawardanna/"
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div className="">
        <a
          href="https://www.instagram.com/aryawardanna/"
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Instagram
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div className="">
        <a
          href="#"
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
}
