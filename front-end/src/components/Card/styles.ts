import { styled, css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    width: 100%;
    height: auto;
    padding: 0.5rem;
    border-radius: 8px;

    background: ${({theme }) => theme.colors.primary};
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    justify-content: space-between;
`;

export const Text = styled.span`
    display: flex;
    flex: 1;

    ${({ theme }) => css`
        font-size: ${theme.font_size.sm}rem;
        color: ${theme.colors.text_primary};
    `};
    text-align: center;
`;