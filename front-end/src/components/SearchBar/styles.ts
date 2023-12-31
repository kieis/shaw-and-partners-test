import { styled, css } from "styled-components"
import { Search } from "@styled-icons/material";
import React  from "react";

type InputTextStyleProps = React.InputHTMLAttributes<HTMLInputElement> & {
    placeholder?: string;
}

type ContainerStyleProps = {
    width?: string;
}

export const Container = styled.div<ContainerStyleProps>`
    display: flex;
    flex-grow: 1;
    align-items: center;
    gap: 0.2rem;
    padding-left: 0.4rem;

    width: ${({ width }) => width ? width : "100%"};
    height: 3rem;
    border-radius: 20px;
    background-color: white;

    &:hover {
        outline: 1px solid ${({ theme }) => theme.colors.highlight }
    }
`;

export const InputText = styled.input.attrs<InputTextStyleProps>(({ placeholder }) => ({
    type: "text",
    placeholder: placeholder ? placeholder : "Search..."
}))`
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border: none;
    outline: none;

    display: flex;
    flex: 1;

    ${({ theme }) => css`
        font-size: ${theme.font_size.sm}rem;
        color: ${theme.colors.secondary};
    `};

    &:focus {
        border: none;
    }
`;

export const SearchIcon = styled(Search).attrs(({ theme }) => ({ 
    color: theme.colors.secondary,
    size: 18
}))``;