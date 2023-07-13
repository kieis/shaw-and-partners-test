import { styled, css } from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background };
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 100vh;

    padding: 2rem;
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
        font-size: ${theme.font_size.md}px;
        color: ${theme.colors.text_primary};
    `};

    font-weight: 400;
`;