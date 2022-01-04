import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { YinYang } from './AllSvgs';
import Intro from './Intro';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h2,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
from {
	transform: rotate(0deg);
}

to {
	transform: rotate(360deg);
}
`;

const Contact = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Blog = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const Work = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  text-decoration: none;
  z-index: 1;
`;
const Skills = styled(Link)`
  color: ${(props) => props.theme.text};

  text-decoration: none;
  z-index: 1;
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} 2s linear infinite;
  }
  & > :last-child {
    padding-top: 1rem;
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export default function Main() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>
        <Contact
          target="_blank"
          to={{ pathname: 'mailto:aryawardanaan3@gmail.com' }}
        >
          <motion.h2
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 1 }}
          >
            Say hi ...
          </motion.h2>
        </Contact>
        <Blog to="/blog">
          <motion.h2
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 1 }}
          >
            Blog
          </motion.h2>
        </Blog>
        <Work to="/work" click={click}>
          <motion.h2
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 1 }}
          >
            Work
          </motion.h2>
        </Work>
        <BottomBar>
          <About to="/about" click={click}>
            <motion.h2
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 1 }}
            >
              About
            </motion.h2>
          </About>
          <Skills to="/skill">
            <motion.h2
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 1 }}
            >
              My Skills
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
}
