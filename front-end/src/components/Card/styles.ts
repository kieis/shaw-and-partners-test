import { darken } from "polished";
import { styled, css } from "styled-components";

type RowStyleProps = {
  isHeader?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  height: auto;
  padding: 0.5rem;
  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  
  background: ${({ theme }) => theme.colors.primary};
  `;

export const Row = styled.div<RowStyleProps>`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 30rem;

  background: ${({ theme }) => darken(0.03, theme.colors.primary)};

  ${({ theme, isHeader }) => isHeader && css`
    background: ${theme.colors.highlight};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `};

  justify-content: space-between;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  //justify-content: center;
  flex: 1;
  padding-block: 0.4rem;
  padding-inline: 0.8rem;

  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}rem;
    color: ${theme.colors.text_primary};
  `};
  text-align: center;
`;
