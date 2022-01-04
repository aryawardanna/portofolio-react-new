import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import pic from '../assets/Images/profile-img.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
	height: 50vh;
  display: flex;



  background: linear-gradient(
		to right,
		${(props) => props.theme.body} 50%,
		${(props) => props.theme.text} 50%) bottom, 
		linear-gradient(
		to right,
		${(props) => props.theme.body} 50%,
		${(props) => props.theme.text} 50%) top;
	
		border-left: 2px solid ${(props) => props.theme.body};
		border-right: 2px solid ${(props) => props.theme.text};
	
		background-repeat: no-repeat;
		background-size: 100% 2px;

		z-index: 1;
		)
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

export default function Intro() {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '50vh' }}
      transition={{ type: 'spring', duration: 1.5, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Arya.</h3>
          <h6>
            I code simple yet bautiful websites and interets a new technology
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={pic} alt="profile" />
        </motion.div>
      </SubBox>
      ?
    </Box>
  );
}
