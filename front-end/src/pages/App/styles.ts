import { styled } from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background };
    width: 100%;
    max-width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;