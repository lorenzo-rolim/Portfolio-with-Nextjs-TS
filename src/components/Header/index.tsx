import React from 'react';
import * as Styled from './styles';

export type HeaderProps = {
  children?: React.ReactNode;
};

const Header = () => {
  return (
    //
    <Styled.Container>
      <Styled.LogoDiv>
        <Styled.logo>
          LLR<span>Developer</span>
        </Styled.logo>
      </Styled.LogoDiv>

      <Styled.skillsContainer>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
      </Styled.skillsContainer>
    </Styled.Container>
  );
};

export default Header;
