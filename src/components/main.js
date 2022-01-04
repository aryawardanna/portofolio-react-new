import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
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

const Contact = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(2rem + 1vw);
  text-decoration: none;
  z-index: 1;
`;

export default function Main() {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />
        <Contact
          target="_blank"
          to={{ pathname: 'mailto:aryawardanaan3@gmail.com' }}
        >
          <h3>Say hi ...</h3>
        </Contact>
      </Container>
    </MainContainer>
  );
}
