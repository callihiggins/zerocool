import { css } from '@emotion/react';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const missionContainerClass = css`
  width: 60%;
  margin: 0 auto;
`;

export const textClass = css`
  font-size: 50px;
  font-family: ${theme.fonts.nexaLight};
  position: relative;
  color: ${theme.colors.white};

  sup {
    font-size: 16px;
    padding-left: 5px;
    color: ${theme.colors.blue};
  }

`;

export const footNotesContainerClass = css`
  margin-top: 40px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.nexaLight};
  font-size: 20px;
  line-height: 22px;
  ul {
    display: inline-block;
    padding-left: 20px;
  }

  li {
    padding: 5px 0;
    margin-left: 30px;
  }
`;

export const footNotesTextClass = css`
    padding: 20px 25px 20px 25px;
    width: auto;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    background-image: linear-gradient(${theme.colors.blue}, ${theme.colors.blue}),
                    linear-gradient(${theme.colors.blue}, ${theme.colors.blue}),
                    linear-gradient(${theme.colors.blue}, ${theme.colors.blue}),
                    linear-gradient(${theme.colors.blue}, ${theme.colors.blue});

    background-repeat: no-repeat;
    background-size: 8px 3px;
    background-position: top left, top right, bottom left, bottom right;

    border: solid ${theme.colors.blue};
    border-width: 0 3px;

    sup {
      color: ${theme.colors.blue};
    }
`;

export const footNotesBulletClass = css`
  display: inline-block;
`;

export const textTransitionContainerClass = css`
  margin: 0 auto;
`;

export const StrongText = styled.strong`
  border-bottom: 1px solid ${theme.colors.blue};
  cursor: pointer;
  transition: all .2s ease-in-out;
  position: relative;

  &:hover {
    color: ${theme.colors.blue};
    border-bottom: 1px solid ${theme.colors.green};
  }

  ${props => props.highlight && `
    color: ${theme.colors.blue};
    border-bottom: 1px solid ${theme.colors.green};
  `
  }
`;