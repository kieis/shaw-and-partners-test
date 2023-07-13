import { styled } from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background };
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 100vh;

    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;