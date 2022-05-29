import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    height: 10vh;

    background-color: ${theme.colors.pallete.black};

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const skillsContainer = styled.nav`
  ${({ theme }) => css`
    width: 30vw;
    margin-right: 8vw;

    display: flex;
    justify-content: space-between;

    color: white;
    text-transform: uppercase;
    font-size: ${theme.font.sizes.medium};

    & > a {
      text-decoration: none;
      color: white;
      position: relative;
      padding: 5px;
      border-radius: 5px;

      transition: all 0.2s ease-in-out;
    }

    & > a:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: -1px;
      left: 0;
      background-color: ${theme.colors.pallete.weakRed};
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }

    a:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    & > a:hover {
      color: ${theme.colors.pallete.weakRed};
      background-color: ${theme.colors.pallete.weakBlack};
    }
  `}
`;

export const LogoDiv = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const logo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.pallete.strongRed};
    font-size: ${theme.font.sizes.xxlarge};
    cursor: default;

    margin-left: 3vw;

    & > span {
      color: white;
      display: block;
      font-size: small;
      text-align: center;
    }
  `}
`;
