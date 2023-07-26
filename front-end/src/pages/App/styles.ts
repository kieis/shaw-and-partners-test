import { styled, css } from "styled-components";

export const Container = styled.div`
    margin-inline: auto;

    background-color: ${({ theme }) => theme.colors.background };
    width: 100%;
    max-width: 144rem;
    height: auto;
    min-height: 100vh;

    padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30%;
`;

export const CardList = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Text = styled.span`
    ${({ theme }) => css`
        font-size: ${theme.font_size.md}rem;
        color: ${theme.colors.text_primary};
    `};

    font-weight: 400;
`;