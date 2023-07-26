import { css, styled } from "styled-components";
import { Check, Search } from "@styled-icons/material";
import { lighten } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({theme}) => theme.colors.primary};

    margin-block: 1.5rem;

    border-radius: 5px;

    align-items: center;

    padding-block: 0.4rem;
    padding-inline: 0.4rem;
`;

export const Text = styled.span`
    ${({ theme }) => css`
        font-size: ${theme.font_size.sm / 1.4}rem;
        color: ${lighten(0.2, theme.colors.highlight)};
    `};

    font-weight: 400;
`;

export const CheckIcon = styled(Check).attrs({
    width: 14
})`
    color: ${({ theme}) => lighten(0.15, theme.colors.highlight)};
    margin-right: 0.4rem;
`;

export const SearchIcon = styled(Search).attrs({
    width: 14
})`
    color: ${({ theme}) => lighten(0.15, theme.colors.highlight)};
    margin-right: 0.4rem;
    margin-left: 3rem;
`;